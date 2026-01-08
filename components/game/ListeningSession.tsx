'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { LISTENING_PASSAGE } from '@/lib/listening_data';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, RotateCcw, CheckCircle, ArrowRight } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import Link from 'next/link';

export function ListeningSession() {
    const [phase, setPhase] = useState<'instructions' | 'listening' | 'questions' | 'complete'>('instructions');
    const [isPlaying, setIsPlaying] = useState(false);
    const [playCount, setPlayCount] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({}); // questionId -> selectedOptionIndex
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [showScript, setShowScript] = useState(false);

    // Initialize Speech
    // Initialize Speech
    useEffect(() => {
        const loadVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            // Prioritize "Google US English", "Samantha", or "Microsoft"
            const bestVoice = voices.find(v => v.name.includes('Google US English')) ||
                voices.find(v => v.name.includes('Samantha')) ||
                voices.find(v => v.name.includes('Microsoft')) ||
                voices.find(v => v.lang.startsWith('en-US'));

            const u = new SpeechSynthesisUtterance(LISTENING_PASSAGE.content);
            if (bestVoice) {
                u.voice = bestVoice;
            }
            u.rate = 0.9;
            u.pitch = 1.05;

            u.onend = () => {
                setIsPlaying(false);
                setPlayCount(prev => prev + 1);
            };

            setUtterance(u);
        };

        loadVoice();

        // Voices load asynchronously in some browsers
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = loadVoice;
        }

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
                window.speechSynthesis.onvoiceschanged = null;
            }
        };
    }, []);

    const togglePlay = () => {
        if (!utterance) return;

        if (isPlaying) {
            window.speechSynthesis.pause();
            setIsPlaying(false);
        } else {
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            } else {
                window.speechSynthesis.speak(utterance);
            }
            setIsPlaying(true);
        }
    };

    const handleRewind = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
    };

    const handleAnswer = (questionId: number, optionIndex: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const calculateScore = () => {
        let correct = 0;
        LISTENING_PASSAGE.questions.forEach(q => {
            if (answers[q.id] === q.correctIndex) correct++;
        });
        return correct;
    };

    return (
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto min-h-[600px]">
            <AnimatePresence mode="wait">
                {/* PHASE 1: INSTRUCTIONS */}
                {phase === 'instructions' && (
                    <motion.div
                        key="instructions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="text-center space-y-8 p-8 bg-white rounded-3xl shadow-xl w-full"
                    >
                        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                            <Volume2 className="w-12 h-12 text-indigo-600" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-800">Part 2: Listening</h1>

                        <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 text-left space-y-4">
                            <h3 className="font-bold text-slate-700 uppercase tracking-widest text-sm">Directions</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Listen to the passage, which will be played twice, and answer the questions that follow.
                                There are five questions in total. Write the letter associated with the most appropriate answer.
                            </p>
                        </div>

                        <Button
                            className="w-full text-xl py-6"
                            onClick={() => setPhase('listening')}
                        >
                            Begin Listening
                        </Button>
                    </motion.div>
                )}

                {/* PHASE 2: LISTENING */}
                {phase === 'listening' && (
                    <motion.div
                        key="listening"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="w-full space-y-8"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl border-b-8 border-indigo-100 text-center space-y-8">
                            <h2 className="text-2xl font-black text-slate-800">{LISTENING_PASSAGE.title}</h2>

                            <div className="flex flex-col items-center gap-4 py-8">
                                <div className={`
                                    w-48 h-48 rounded-full flex items-center justify-center border-8 transition-all duration-500
                                    ${isPlaying ? 'border-indigo-500 bg-indigo-50 scale-105 shadow-indigo-200 shadow-2xl' : 'border-slate-200 bg-slate-50'}
                                `}>
                                    {isPlaying ? (
                                        <div className="flex gap-2 h-12 items-end">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <motion.div
                                                    key={i}
                                                    className="w-3 bg-indigo-500 rounded-full"
                                                    animate={{ height: [12, 48, 12] }}
                                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <Volume2 className="w-20 h-20 text-slate-300" />
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <Button
                                    onClick={togglePlay}
                                    className={`w-20 h-20 rounded-full flex items-center justify-center p-0 ${isPlaying ? 'bg-amber-500 border-amber-700' : 'bg-green-500 border-green-700'}`}
                                >
                                    {isPlaying ? <Pause className="w-8 h-8 fill-white" /> : <Play className="w-8 h-8 fill-white ml-1" />}
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={handleRewind}
                                    className="w-20 h-20 rounded-full flex items-center justify-center p-0"
                                >
                                    <RotateCcw className="w-8 h-8 text-slate-500" />
                                </Button>
                            </div>

                            <p className="font-bold text-slate-400">Played: {playCount} / 2 Times</p>
                        </div>

                        <Button
                            className="w-full py-6 text-xl"
                            onClick={() => {
                                window.speechSynthesis.cancel();
                                setPhase('questions');
                            }}
                        >
                            Proceed to Questions <ArrowRight className="w-6 h-6 ml-2" />
                        </Button>
                    </motion.div>
                )}

                {/* PHASE 3: QUESTIONS */}
                {phase === 'questions' && (
                    <motion.div
                        key="questions"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="w-full space-y-6"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-slate-500">
                                Question {currentQuestionIndex + 1} of {LISTENING_PASSAGE.questions.length}
                            </h2>
                            <div className="text-sm font-bold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                                Topic: Comprehension
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border-b-4 border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-800 leading-snug mb-8">
                                {LISTENING_PASSAGE.questions[currentQuestionIndex].question}
                            </h3>

                            <div className="space-y-3">
                                {LISTENING_PASSAGE.questions[currentQuestionIndex].options.map((option, idx) => {
                                    const isSelected = answers[LISTENING_PASSAGE.questions[currentQuestionIndex].id] === idx;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(LISTENING_PASSAGE.questions[currentQuestionIndex].id, idx)}
                                            className={`
                                                w-full p-4 rounded-xl text-left font-medium transition-all border-2
                                                ${isSelected
                                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md transform scale-[1.01]'
                                                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-white'}
                                            `}
                                        >
                                            <span className="font-bold mr-4 opacity-70">{['a', 'b', 'c', 'd'][idx]}.</span>
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex justify-between pt-4">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                disabled={currentQuestionIndex === 0}
                            >
                                Previous
                            </Button>

                            {currentQuestionIndex < LISTENING_PASSAGE.questions.length - 1 ? (
                                <Button
                                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                                >
                                    Next Question
                                </Button>
                            ) : (
                                <Button
                                    className="bg-green-600 hover:bg-green-700 text-white border-green-800"
                                    onClick={() => {
                                        canvasConfetti();
                                        setPhase('complete');
                                    }}
                                >
                                    Submit Answers
                                </Button>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* PHASE 4: COMPLETE */}
                {phase === 'complete' && (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full text-center space-y-8 bg-white p-8 rounded-3xl shadow-xl"
                    >
                        <div className="text-8xl mb-4">📝</div>
                        <h1 className="text-4xl font-black text-slate-800">Section Complete</h1>

                        <div className="bg-slate-100 p-8 rounded-2xl">
                            <div className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Your Score</div>
                            <div className="text-6xl font-black text-indigo-600">
                                {calculateScore()} / {LISTENING_PASSAGE.questions.length}
                            </div>
                        </div>

                        <Link href="/">
                            <Button className="w-full text-xl py-6">Return to Dashboard</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
