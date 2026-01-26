'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Brain, Check, X, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import confetti from 'canvas-confetti';

type LogicQuestion = {
    id: string;
    type: 'sequence' | 'word_problem' | 'pattern';
    question: string;
    options?: string[]; // Multiple choice
    correctAnswer: string;
    explanation: string;
};

const LOGIC_QUESTIONS: LogicQuestion[] = [
    {
        id: 'seq1',
        type: 'sequence',
        question: 'What comes next in the sequence? 2, 6, 12, 20, ?',
        options: ['28', '30', '32', '42'],
        correctAnswer: '30',
        explanation: 'The difference increases by 2 each time: +4, +6, +8, so +10. 20 + 10 = 30.'
    },
    {
        id: 'word1',
        type: 'word_problem',
        question: 'If all Bloops are Glerps, and some Glerps are Zazzles, which of the following MUST be true?',
        options: [
            'All Bloops are Zazzles',
            'Some Bloops are Zazzles',
            'All Zazzles are Glerps',
            'None of the above'
        ],
        correctAnswer: 'None of the above',
        explanation: 'We don\'t know if the Glerps that are Zazzles are the same ones that are Bloops.'
    },
    {
        id: 'seq2',
        type: 'sequence',
        question: 'Find the missing number: 1, 1, 2, 3, 5, 8, ?',
        options: ['11', '12', '13', '15'],
        correctAnswer: '13',
        explanation: 'Fibonacci sequence: each number is the sum of the two preceding ones (5 + 8 = 13).'
    },
    {
        id: 'word2',
        type: 'word_problem',
        question: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
        options: ['$0.10', '$0.05', '$0.01', '$0.15'],
        correctAnswer: '$0.05',
        explanation: 'Bat + Ball = 1.10. Bat = Ball + 1.00. (Ball + 1.00) + Ball = 1.10 -> 2*Ball = 0.10 -> Ball = 0.05.'
    },
    {
        id: 'pattern1',
        type: 'pattern',
        question: 'Which word does NOT belong? Apple, Banana, Orange, Carrot',
        options: ['Apple', 'Banana', 'Orange', 'Carrot'],
        correctAnswer: 'Carrot',
        explanation: 'Carrot is a vegetable; the others are fruits.'
    }
];

export default function LogicDrill() {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());
    const [totalTime, setTotalTime] = useState(0);

    const currentQ = LOGIC_QUESTIONS[currentQIndex];

    const handleAnswer = (option: string) => {
        if (selectedOption) return; // Prevent double click
        setSelectedOption(option);

        const isCorrect = option === currentQ.correctAnswer;
        if (isCorrect) {
            setScore(s => s + 1);
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#22c55e']
            });
        }
        setShowExplanation(true);
    };

    const handleNext = () => {
        if (currentQIndex < LOGIC_QUESTIONS.length - 1) {
            setCurrentQIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            setTotalTime(Date.now() - startTime);
            setIsFinished(true);
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    const handleRestart = () => {
        setCurrentQIndex(0);
        setScore(0);
        setSelectedOption(null);
        setShowExplanation(false);
        setIsFinished(false);
        setStartTime(Date.now());
    };

    if (isFinished) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center"
                >
                    <div className="text-6xl mb-4">🧠</div>
                    <h2 className="text-3xl font-black text-slate-800 mb-2">Drill Complete!</h2>
                    <p className="text-slate-500 mb-8 font-medium">Your Logic Analysis</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-indigo-50 p-4 rounded-2xl">
                            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Score</div>
                            <div className="text-4xl font-black text-indigo-700">{score}/{LOGIC_QUESTIONS.length}</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-2xl">
                            <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">Time</div>
                            <div className="text-4xl font-black text-orange-700">{Math.round(totalTime / 1000)}s</div>
                        </div>
                    </div>

                    <Button onClick={handleRestart} className="w-full flex items-center justify-center gap-2">
                        <RefreshCw size={20} /> Try Again
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 mx-auto max-w-2xl">
            {/* Header */}
            <div className="w-full flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-600 text-white p-2 rounded-xl">
                        <Brain size={24} />
                    </div>
                    <div>
                        <h1 className="font-bold text-slate-800 leading-tight">Logic Lab</h1>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Mita Prep</p>
                    </div>
                </div>
                <div className="font-mono text-slate-400 font-bold bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                    {currentQIndex + 1} / {LOGIC_QUESTIONS.length}
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQ.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    className="w-full"
                >
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-slate-200 mb-6">
                        <div className="text-xs font-bold text-indigo-500 mb-2 uppercase tracking-wider bg-indigo-50 inline-block px-2 py-1 rounded-md">
                            {currentQ.type.replace('_', ' ')}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 leading-snug">
                            {currentQ.question}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 gap-3">
                        {currentQ.options?.map((option) => {
                            const isSelected = selectedOption === option;
                            const isCorrect = option === currentQ.correctAnswer;

                            let btnClass = "bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-600";
                            if (showExplanation) {
                                if (isCorrect) btnClass = "bg-green-100 border-green-400 text-green-800";
                                else if (isSelected) btnClass = "bg-red-100 border-red-400 text-red-800";
                                else btnClass = "bg-white border-slate-100 text-slate-400 opacity-50";
                            }

                            return (
                                <button
                                    key={option}
                                    onClick={() => handleAnswer(option)}
                                    disabled={!!selectedOption}
                                    className={`w-full p-4 rounded-xl font-bold text-left transition-all text-lg flex justify-between items-center ${btnClass}`}
                                >
                                    {option}
                                    {showExplanation && isCorrect && <Check className="text-green-600" />}
                                    {showExplanation && isSelected && !isCorrect && <X className="text-red-500" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Skip Button (only if not answered) */}
                    {!selectedOption && (
                        <div className="mt-6 flex justify-center">
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    setSelectedOption('skipped');
                                    setShowExplanation(true);
                                }}
                                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                            >
                                Skip / Show Answer
                            </Button>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Explanation & Next */}
            <AnimatePresence>
                {showExplanation && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full mt-6 bg-indigo-900 text-white p-6 rounded-2xl shadow-xl"
                    >
                        <h3 className="font-bold text-indigo-200 mb-2 uppercase text-sm tracking-wider">Explanation</h3>
                        <p className="text-lg font-medium mb-6">
                            {currentQ.explanation}
                        </p>
                        <Button onClick={handleNext} className="w-full bg-white text-indigo-900 hover:bg-indigo-50 border-none">
                            Next Question <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
