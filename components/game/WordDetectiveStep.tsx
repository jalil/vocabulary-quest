'use client';

import { useState } from 'react';
import { VocabularyWord } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Search, CheckCircle, XCircle } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';

interface WordDetectiveStepProps {
    targetWord: VocabularyWord;
    distractors: VocabularyWord[];
    onComplete: () => void;
    onWrong?: () => void;
}

export function WordDetectiveStep({ targetWord, distractors, onComplete, onWrong }: WordDetectiveStepProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'wrong' | 'correct'>('idle');

    // Create masked sentence
    // Replace word and its case variations
    const maskWord = (sentence: string, word: string) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        return sentence.replace(regex, '_________');
    };

    const maskedSentence = maskWord(targetWord.exampleSentence, targetWord.word);

    // Prepare options
    const options = [targetWord, ...distractors].sort(() => 0.5 - Math.random());

    const handleSelect = (word: VocabularyWord) => {
        if (status === 'correct') return;
        setSelectedId(word.id);

        if (word.id === targetWord.id) {
            setStatus('correct');
            canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            setTimeout(onComplete, 1500);
        } else {
            setStatus('wrong');
            onWrong?.();
            setTimeout(() => {
                setStatus('idle');
                setSelectedId(null);
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto gap-8">
            <div className="text-center space-y-4">
                <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-200">
                    <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Case File #{targetWord.id.slice(-3)}</h3>

                <div className="bg-amber-50 p-8 rounded-3xl border-2 border-amber-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-amber-200 px-4 py-1 rounded-br-xl text-xs font-black text-amber-800 uppercase">Evidence</div>
                    <p className="text-2xl font-serif text-slate-800 leading-relaxed italic">
                        "{maskedSentence}"
                    </p>
                </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {options.map((word) => {
                    const isSelected = selectedId === word.id;
                    let variant: 'outline' | 'success' | 'destructive' = 'outline';

                    if (isSelected) {
                        if (status === 'correct') variant = 'success';
                        if (status === 'wrong') variant = 'destructive';
                    }

                    return (
                        <motion.div key={word.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                onClick={() => handleSelect(word)}
                                className={`
                                    w-full py-6 text-lg capitalize flex flex-col gap-1 h-auto
                                    ${variant === 'outline' ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-indigo-300' : ''}
                                    ${variant === 'success' ? 'bg-emerald-500 border-emerald-700 text-white' : ''}
                                    ${variant === 'destructive' ? 'bg-rose-500 border-rose-700 text-white animate-shake' : ''}
                                `}
                            >
                                <span className={isSelected ? 'text-white' : 'text-slate-800'}>{word.word}</span>
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
