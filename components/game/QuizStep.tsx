'use client';

import { VocabularyWord, WordStudyQuestion } from '@/lib/types';
import { MOCK_WORDS } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import canvasConfetti from 'canvas-confetti';
import { Check, X, Star, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizStepProps {
    targetWord?: VocabularyWord;
    customQuestion?: WordStudyQuestion;
    allWords?: VocabularyWord[]; // Needed for standard generator
    onComplete: () => void;
    onWrong?: (wordId: string) => void;
}

export function QuizStep({ targetWord, customQuestion, allWords, onComplete, onWrong }: QuizStepProps) {
    const [options, setOptions] = useState<string[] | VocabularyWord[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

    useEffect(() => {
        if (customQuestion) {
            // Mita Mode: Use provided options
            // Shuffle them for randomness if not already shuffled, though analogies usually have specific order?
            // Let's shuffle options to prevent pattern guessing
            const shuffled = [...customQuestion.options].sort(() => 0.5 - Math.random());
            setOptions(shuffled);
        } else if (targetWord && allWords) {
            // Standard Mode: Generate distractors
            const others = allWords.filter(w => w.id !== targetWord.id);
            let pool = others;
            if (pool.length < 3) {
                const backups = MOCK_WORDS.filter(w => w.id !== targetWord.id && !pool.some(p => p.id === w.id));
                pool = [...pool, ...backups];
            }
            const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
            const stepOptions = [...shuffled, targetWord].sort(() => 0.5 - Math.random());
            setOptions(stepOptions);
        }

        setSelectedId(null);
        setStatus('idle');
    }, [targetWord, allWords, customQuestion]);

    const handleSelect = (id: string) => {
        if (status === 'correct') return;
        setSelectedId(id);

        let isCorrect = false;

        if (customQuestion) {
            isCorrect = id === customQuestion.correctAnswer;
        } else if (targetWord) {
            isCorrect = id === targetWord.id;
        }

        if (isCorrect) {
            setStatus('correct');
            // If custom question, we might want to show explanation before auto-advance?
            // We'll rely on the "Continue" button or timeout.

            if (!customQuestion) {
                setTimeout(() => onComplete(), 1500);
            }

            try {
                canvasConfetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            } catch (e) {
                console.error("Confetti failed:", e);
            }
        } else {
            setStatus('wrong');
            if (targetWord) onWrong?.(targetWord.id);

            setTimeout(() => {
                setStatus('idle');
                setSelectedId(null);
            }, 1000);
        }
    };

    // Render Content
    let questionContent = null;
    if (customQuestion) {
        questionContent = (
            <p className="text-xl font-bold text-slate-800 leading-relaxed">
                {customQuestion.question}
            </p>
        );
    } else if (targetWord) {
        const sentenceMasked = targetWord.exampleSentence.replace(
            new RegExp(targetWord.word, 'gi'),
            '_______'
        );
        questionContent = (
            <p className="text-2xl font-bold text-slate-800 leading-relaxed">
                "{sentenceMasked}"
            </p>
        );
    }

    return (
        <div className="flex flex-col h-full items-center max-w-sm mx-auto w-full relative">

            <h2 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-center">
                {customQuestion ? `Word Study: ${customQuestion.type}` : 'Complete the Sentence'}
            </h2>

            <div className={cn(
                "bg-white p-8 rounded-[2rem] shadow-lg border-[3px] mb-8 w-full text-center min-h-[160px] flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300",
                status === 'correct' ? "border-green-400 bg-green-50" : "border-slate-100"
            )}>
                {/* Mita Special Badge */}
                {customQuestion && (
                    <div className="absolute top-0 right-0 bg-violet-100 text-violet-700 px-3 py-1 rounded-bl-xl font-bold text-xs flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>Mita Challenge</span>
                    </div>
                )}

                {questionContent}

                {/* Explanation for Custom Questions */}
                <AnimatePresence>
                    {status === 'correct' && customQuestion && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 pt-4 border-t border-green-200 text-green-800 text-sm font-medium"
                        >
                            <span className="font-bold block mb-1">Explanation:</span>
                            {customQuestion.explanation}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
                {options.map((opt) => {
                    const id = typeof opt === 'string' ? opt : opt.id;
                    const text = typeof opt === 'string' ? opt : opt.word;

                    const isSelected = selectedId === id;
                    let variant = 'outline';
                    if (isSelected && status === 'correct') variant = 'success';
                    if (isSelected && status === 'wrong') variant = 'secondary';

                    return (
                        <Button
                            key={id}
                            variant={variant as any}
                            onClick={() => handleSelect(id)}
                            className="justify-between py-4 text-xl"
                            disabled={status === 'correct'}
                        >
                            <span className="flex-1 text-center">{text}</span>
                            {isSelected && status === 'correct' && <Check className="absolute right-4" />}
                            {isSelected && status === 'wrong' && <X className="absolute right-4" />}
                        </Button>
                    )
                })}
            </div>

            {status === 'correct' && (
                <div className="mt-6 w-full animate-in fade-in slide-in-from-bottom-4">
                    <Button
                        onClick={() => onComplete()}
                        className="w-full h-14 text-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-200"
                    >
                        Continue ➔
                    </Button>
                </div>
            )}
        </div>
    );
}
