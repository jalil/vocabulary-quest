'use client';

import { VocabularyWord } from '@/lib/types';
import { MOCK_WORDS } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import canvasConfetti from 'canvas-confetti';
import { Check, X } from 'lucide-react';

interface QuizStepProps {
    targetWord: VocabularyWord;
    allWords: VocabularyWord[]; // Needed to generate distractors
    onComplete: () => void;
    onWrong?: (wordId: string) => void;
}

export function QuizStep({ targetWord, allWords, onComplete, onWrong }: QuizStepProps) {
    const [options, setOptions] = useState<VocabularyWord[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

    useEffect(() => {
        // Generate distractors
        const others = allWords.filter(w => w.id !== targetWord.id);

        // Fallback if not enough custom words: use MOCK_WORDS
        let pool = others;
        if (pool.length < 3) {
            const backups = MOCK_WORDS.filter(w => w.id !== targetWord.id && !pool.some(p => p.id === w.id));
            pool = [...pool, ...backups];
        }

        // Shuffle and pick 3
        const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 3);
        const stepOptions = [...shuffled, targetWord].sort(() => 0.5 - Math.random());
        setOptions(stepOptions);
        setSelectedId(null);
        setStatus('idle');
    }, [targetWord, allWords]);

    const handleSelect = (id: string) => {
        console.log("QuizStep: Selected", id, "Target:", targetWord.id);
        if (status === 'correct') return;
        setSelectedId(id);

        if (id === targetWord.id) {
            console.log("QuizStep: Correct answer!");
            setStatus('correct');
            // Ensure we advance even if confetti fails
            // We kept the timeout, but we also add a manual button below
            setTimeout(() => {
                console.log("QuizStep: Timeout triggered, calling onComplete");
                onComplete();
            }, 1500);

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
            console.log("QuizStep: Wrong answer");
            setStatus('wrong');
            // Notify parent about the weak word
            onWrong?.(targetWord.id);
            setTimeout(() => {
                setStatus('idle');
                setSelectedId(null);
            }, 1000);
        }
    };

    // Mask the word in the sentence (case insensitive)
    const sentenceMasked = targetWord.exampleSentence.replace(
        new RegExp(targetWord.word, 'gi'),
        '_______'
    );

    return (
        <div className="flex flex-col h-full items-center max-w-sm mx-auto w-full">
            <h2 className="text-xl font-bold text-slate-400 mb-8 uppercase tracking-widest text-center">Complete the Sentence</h2>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border-[3px] border-slate-100 mb-8 w-full text-center min-h-[160px] flex items-center justify-center">
                <p className="text-2xl font-bold text-slate-800 leading-relaxed">
                    "{sentenceMasked}"
                </p>
            </div>

            <div className="grid grid-cols-1 gap-3 w-full">
                {options.map(opt => {
                    const isSelected = selectedId === opt.id;
                    let variant = 'outline';
                    // Using any to bypass strict type check for conditional string if needed, 
                    // but values should match ButtonProps
                    if (isSelected && status === 'correct') variant = 'success';
                    if (isSelected && status === 'wrong') variant = 'secondary';

                    return (
                        <Button
                            key={opt.id}
                            variant={variant as any}
                            onClick={() => handleSelect(opt.id)}
                            className="justify-between py-4 text-xl"
                            disabled={status === 'correct'}
                        >
                            <span className="flex-1 text-center">{opt.word}</span>
                            {isSelected && status === 'correct' && <Check className="absolute right-4" />}
                            {isSelected && status === 'wrong' && <X className="absolute right-4" />}
                        </Button>
                    )
                })}
            </div>

            {status === 'correct' && (
                <div className="mt-6 w-full animate-in fade-in slide-in-from-bottom-4">
                    <Button
                        onClick={() => {
                            console.log("QuizStep: Manual Continue Clicked");
                            onComplete();
                        }}
                        className="w-full h-14 text-xl bg-green-500 hover:bg-green-600 shadow-lg shadow-green-200"
                    >
                        Continue ➔
                    </Button>
                </div>
            )}
        </div>
    );
}
