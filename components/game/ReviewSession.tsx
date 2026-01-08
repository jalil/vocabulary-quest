'use client';

import { useState, useRef, useEffect } from 'react';
import { VocabularyWord } from '@/lib/types';
import { useUserStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, X, Send } from 'lucide-react';
import Link from 'next/link';
import canvasConfetti from 'canvas-confetti';

interface ReviewSessionProps {
    words: VocabularyWord[];
}

export function ReviewSession({ words }: ReviewSessionProps) {
    const [queue, setQueue] = useState(words);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'wrong' | 'correct'>('idle');
    const [showHint, setShowHint] = useState(false);

    // We track if the user *initially* got it wrong, to mark SRS failure
    const [hasFailed, setHasFailed] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const processReview = useUserStore(state => state.processReview);

    const currentWord = queue[currentIndex];
    const isLastWord = currentIndex === queue.length - 1;

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, [currentIndex, status]);

    const normalize = (s: string) => s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (status === 'correct') return;

        if (!input.trim()) return;

        const isMatch = normalize(input) === normalize(currentWord.word);

        if (isMatch) {
            // If they already failed this card, we just let them proceed but record the failure
            // If they got it right first try (hasFailed is false), we record success
            if (!hasFailed) {
                processReview(currentWord.id, true);
                canvasConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            } else {
                // They eventually got it right, but they failed initially
                processReview(currentWord.id, false);
            }

            setStatus('correct');

            setTimeout(() => {
                if (currentIndex < queue.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                    setInput('');
                    setStatus('idle');
                    setHasFailed(false);
                    setShowHint(false);
                } else {
                    // Complete
                    // We can just redirect or show a "Done" screen
                    // For now, let's show a done screen state locally
                    setCurrentIndex(prev => prev + 1);
                }
            }, 1000);

        } else {
            setStatus('wrong');
            setHasFailed(true); // Mark as failed for SRS purposes
            setShowHint(true); // Show the answer so they can copy it

            // Simple shake timeout to reset visual state but keep 'wrong' logic active
            // Actually, we stay in 'wrong' state until they fix it
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.select();
                    inputRef.current.focus();
                }
            }, 500);
        }
    };

    if (currentIndex >= queue.length) {
        return (
            <div className="flex flex-col items-center justify-center space-y-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="text-9xl">🌟</div>
                <h2 className="text-4xl font-black text-slate-800">Session Complete!</h2>
                <p className="text-xl text-slate-500">You reviewed {queue.length} words.</p>
                <Link href="/">
                    <Button variant="primary" className="text-lg px-8 py-4">Return to Dashboard</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Exit
                    </Button>
                </Link>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Review {currentIndex + 1} / {queue.length}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-indigo-500 transition-all duration-300"
                    style={{ width: `${((currentIndex) / queue.length) * 100}%` }}
                />
            </div>

            {/* Card */}
            <motion.div
                key={currentWord.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-b-8 border-slate-100/50"
            >
                <div className="space-y-6 text-center">
                    <div>
                        <span className="text-6xl mb-4 block">{currentWord.imageEmoji}</span>
                        <h3 className="text-lg text-slate-400 font-bold uppercase tracking-widest mb-2">Definition</h3>
                        <p className="text-2xl font-medium text-slate-700 leading-relaxed">
                            {currentWord.definition}
                        </p>
                    </div>

                    {showHint && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-4 bg-rose-50 rounded-xl border-2 border-rose-100"
                        >
                            <p className="text-rose-500 font-bold">Answer: {currentWord.word}</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type the word..."
                            className={`
                                w-full text-center text-3xl font-bold py-4 bg-slate-50 border-b-4 focus:outline-none transition-colors rounded-xl
                                ${status === 'wrong' ? 'border-rose-400 bg-rose-50 text-rose-500 animate-shake' :
                                    status === 'correct' ? 'border-emerald-400 bg-emerald-50 text-emerald-500' :
                                        'border-slate-200 focus:border-indigo-400 focus:bg-white'}
                            `}
                            disabled={status === 'correct'}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            {status === 'correct' && <Check className="w-8 h-8 text-emerald-500" />}
                            {status === 'wrong' && <X className="w-8 h-8 text-rose-500" />}
                        </div>
                    </form>

                    <Button
                        onClick={() => handleSubmit()}
                        variant="primary"
                        className="w-full py-4 text-xl"
                        disabled={status === 'correct'}
                    >
                        {status === 'wrong' ? 'Try Again' : 'Check Answer'}
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
