'use client';

import { useState, useEffect } from 'react';
import { VocabularyWord } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RefreshCw } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

interface SentenceBuilderStepProps {
    targetWord: VocabularyWord;
    onComplete: () => void;
    onWrong?: () => void;
}

export function SentenceBuilderStep({ targetWord, onComplete, onWrong }: SentenceBuilderStepProps) {
    const [scrambledWords, setScrambledWords] = useState<{ id: number, text: string }[]>([]);
    const [builtSentence, setBuiltSentence] = useState<{ id: number, text: string }[]>([]);
    const [status, setStatus] = useState<'idle' | 'wrong' | 'correct'>('idle');

    // Initialize logic
    useEffect(() => {
        const words = targetWord.exampleSentence
            .replace(/[.!?]/g, '') // Simple punctuation strip for MVP
            .split(' ')
            .map((text, i) => ({ id: i, text }));

        // Fisher-Yates Shuffle
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }

        setScrambledWords(words);
        setBuiltSentence([]);
        setStatus('idle');
    }, [targetWord]);

    const handleWordClick = (word: { id: number, text: string }) => {
        if (status === 'correct') return;
        setScrambledWords(prev => prev.filter(w => w.id !== word.id));
        setBuiltSentence(prev => [...prev, word]);
        setStatus('idle');
    };

    const handleUndoClick = (word: { id: number, text: string }) => {
        if (status === 'correct') return;
        setBuiltSentence(prev => prev.filter(w => w.id !== word.id));
        setScrambledWords(prev => [...prev, word]);
        setStatus('idle');
    };

    const handleCheck = () => {
        const currentString = builtSentence.map(w => w.text).join(' ');
        const targetString = targetWord.exampleSentence.replace(/[.!?]/g, '');

        // Loose comparison (case insensitive, ignore punctuation differences)
        if (currentString.toLowerCase() === targetString.toLowerCase()) {
            setStatus('correct');
            canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            setTimeout(onComplete, 1500);
        } else {
            setStatus('wrong');
            onWrong?.();
            setTimeout(() => setStatus('idle'), 800);
        }
    };

    const handleReset = () => {
        const words = targetWord.exampleSentence
            .replace(/[.!?]/g, '')
            .split(' ')
            .map((text, i) => ({ id: i, text }));
        // Reshuffle
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        setScrambledWords(words);
        setBuiltSentence([]);
        setStatus('idle');
    };

    return (
        <div className="flex flex-col items-center w-full max-w-sm mx-auto gap-8">
            <div className="text-center space-y-2">
                <span className="text-4xl block mb-2">{targetWord.imageEmoji}</span>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Build the Sentence</p>
                <h3 className="text-2xl font-black text-slate-800">{targetWord.word}</h3>
            </div>

            {/* Answer Area */}
            <div className={`
                w-full min-h-[120px] bg-slate-100 rounded-3xl p-6 flex flex-wrap gap-2 content-start border-4 transition-colors
                ${status === 'wrong' ? 'border-rose-300 bg-rose-50 animate-shake' :
                    status === 'correct' ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200'}
            `}>
                {builtSentence.length === 0 && (
                    <p className="text-slate-400 w-full text-center mt-4">Tap words below to build...</p>
                )}
                <AnimatePresence>
                    {builtSentence.map(word => (
                        <motion.button
                            key={word.id}
                            layoutId={`word-${word.id}`}
                            onClick={() => handleUndoClick(word)}
                            className="bg-white px-3 py-2 rounded-xl border-b-4 border-slate-200 font-bold text-slate-700 shadow-sm text-sm"
                        >
                            {word.text}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Word Bank */}
            <div className="flex flex-wrap gap-2 justify-center">
                <AnimatePresence>
                    {scrambledWords.map(word => (
                        <motion.button
                            key={word.id}
                            layoutId={`word-${word.id}`}
                            onClick={() => handleWordClick(word)}
                            className="bg-white px-4 py-3 rounded-xl border-b-4 border-indigo-200 font-bold text-indigo-700 shadow-sm active:scale-95 transition-transform"
                        >
                            {word.text}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex gap-4 w-full">
                <Button variant="ghost" onClick={handleReset} className="w-16">
                    <RefreshCw className="w-6 h-6" />
                </Button>
                <Button
                    onClick={handleCheck}
                    className="flex-1"
                    disabled={scrambledWords.length > 0 || status === 'correct'}
                >
                    Check Sentence
                </Button>
            </div>
        </div>
    );
}
