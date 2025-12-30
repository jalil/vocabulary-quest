'use client';

import { VocabularyWord } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import canvasConfetti from 'canvas-confetti';
import { Check, X, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ActiveRecallStepProps {
    targetWord: VocabularyWord;
    onComplete: () => void;
    onWrong?: (wordId: string) => void;
}

export function ActiveRecallStep({ targetWord, onComplete, onWrong }: ActiveRecallStepProps) {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
    const [attempts, setAttempts] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Auto-focus input on mount
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [targetWord]);

    const normalize = (str: string) => str.trim().toLowerCase();

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (status === 'correct') return;

        if (!input.trim()) {
            setStatus('wrong');
            setTimeout(() => {
                setStatus('idle');
                if (inputRef.current) inputRef.current.focus();
            }, 800);
            return;
        }

        if (normalize(input) === normalize(targetWord.word)) {
            setStatus('correct');
            canvasConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(onComplete, 1500);
        } else {
            setStatus('wrong');
            setAttempts(prev => prev + 1);
            onWrong?.(targetWord.word); // Mark as weak

            // Shake animation logic handled by motion.div key prop usually, or simple timeout reset
            setTimeout(() => {
                setStatus('idle');
                // Don't clear input, let them fix it
                if (inputRef.current) inputRef.current.focus();
            }, 800);
        }
    };

    const handleGiveUp = () => {
        setInput(targetWord.word);
        if (inputRef.current) inputRef.current.focus();
    };

    // Construct mask for hint
    // Show first letter after 3 attempts
    const hint = attempts >= 2 ? `${targetWord.word[0]}...` : '';

    return (
        <div className="flex flex-col h-full items-center max-w-sm mx-auto w-full">
            <h2 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-center">Type the Word</h2>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border-[3px] border-slate-100 mb-8 w-full text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20 filter grayscale">
                    {targetWord.imageEmoji}
                </div>

                <span className="text-sm font-bold uppercase tracking-widest text-violet-300 mb-2 block">Definition</span>
                <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-6">
                    "{targetWord.definition}"
                </p>

                {hint && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="bg-yellow-50 text-yellow-600 text-sm font-bold py-1 px-3 rounded-full inline-flex items-center gap-2 mb-4"
                    >
                        <HelpCircle size={14} />
                        Hint: Starts with "{targetWord.word[0]}"
                    </motion.div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <motion.div
                    animate={status === 'wrong' ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your answer..."
                        className={`
                            w-full p-6 text-2xl font-bold text-center rounded-2xl border-4 outline-none transition-colors
                            ${status === 'correct' ? 'border-green-500 bg-green-50 text-green-700' :
                                status === 'wrong' ? 'border-rose-300 bg-rose-50 text-rose-700' :
                                    'border-slate-200 focus:border-indigo-500 text-slate-800'}
                        `}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        disabled={status === 'correct'}
                    />
                </motion.div>

                <Button
                    type="submit"
                    className="w-full h-16 text-xl"
                    variant={status === 'correct' ? 'success' : 'primary'}
                    disabled={status === 'correct'}
                >
                    {status === 'correct' ? 'Correct!' : 'Check Answer'}
                </Button>

                {attempts >= 3 && status !== 'correct' && (
                    <motion.button
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        type="button"
                        onClick={handleGiveUp}
                        className="w-full text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors py-2"
                    >
                        I don't know, show me
                    </motion.button>
                )}
            </form>
        </div>
    );
}
