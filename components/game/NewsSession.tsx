'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { NEWS_BRIEFS, NewsBrief } from '@/lib/news_data';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Radio, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import canvasConfetti from 'canvas-confetti';
import Link from 'next/link';

export function NewsSession() {
    const [currentBriefIndex, setCurrentBriefIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [phase, setPhase] = useState<'listening' | 'questions' | 'complete'>('listening');
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({}); // briefId-qId -> selectedIndex

    const currentBrief = NEWS_BRIEFS[currentBriefIndex];

    // Load Voice & Utterance
    useEffect(() => {
        const loadVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            const bestVoice = voices.find(v => v.name.includes('Google US English')) ||
                voices.find(v => v.name.includes('Samantha')) ||
                voices.find(v => v.lang.startsWith('en-US'));

            const u = new SpeechSynthesisUtterance(currentBrief.content);
            if (bestVoice) u.voice = bestVoice;
            u.rate = 1.0; // News is faster than exams
            u.pitch = 1.0;

            u.onend = () => setIsPlaying(false);
            setUtterance(u);
        };

        if (phase === 'listening') {
            loadVoice();
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoice;
            }
        }

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [currentBriefIndex, phase]);

    const togglePlay = () => {
        if (!utterance) return;
        if (isPlaying) {
            window.speechSynthesis.pause();
            setIsPlaying(false);
        } else {
            window.speechSynthesis.resume();
            if (!window.speechSynthesis.speaking) {
                window.speechSynthesis.speak(utterance);
            }
            setIsPlaying(true);
        }
    };

    const handleAnswer = (qId: number, idx: number) => {
        const key = `${currentBrief.id}-${qId}`;
        setAnswers(prev => ({ ...prev, [key]: idx }));
    };

    const submitQuestions = () => {
        let briefScore = 0;
        currentBrief.questions.forEach(q => {
            if (answers[`${currentBrief.id}-${q.id}`] === q.correctIndex) {
                briefScore++;
            }
        });
        setScore(prev => prev + briefScore);

        if (currentBriefIndex < NEWS_BRIEFS.length - 1) {
            setCurrentBriefIndex(prev => prev + 1);
            setPhase('listening');
        } else {
            setPhase('complete');
            canvasConfetti();
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[600px] flex flex-col">
            {/* Header */}
            <div className="bg-red-600 text-white p-4 rounded-t-3xl flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                    <Radio className="w-6 h-6 animate-pulse" />
                    <span className="font-black uppercase tracking-widest">Global Newsroom</span>
                </div>
                <div className="font-mono bg-red-800 px-3 py-1 rounded">LIVE FEED</div>
            </div>

            <AnimatePresence mode="wait">
                {phase === 'listening' && (
                    <motion.div
                        key="listening"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white p-8 rounded-b-3xl shadow-xl space-y-8 border-x-4 border-b-4 border-slate-200"
                    >
                        <div className="flex justify-between items-start">
                            <span className="bg-slate-100 text-slate-500 font-bold px-3 py-1 rounded text-sm uppercase">
                                {currentBrief.category}
                            </span>
                            <span className="text-slate-400 font-mono text-sm">Story {currentBriefIndex + 1}/{NEWS_BRIEFS.length}</span>
                        </div>

                        <h2 className="text-4xl font-black text-slate-800 leading-tight">
                            {currentBrief.title}
                        </h2>

                        <div className="py-12 flex justify-center">
                            <Button
                                onClick={togglePlay}
                                className={`
                                    w-32 h-32 rounded-full flex flex-col items-center justify-center gap-2 transition-all
                                    ${isPlaying ? 'bg-red-500 border-red-700 scale-105' : 'bg-slate-800 border-slate-900'}
                                `}
                            >
                                {isPlaying ? <Pause className="w-12 h-12 fill-white" /> : <Play className="w-12 h-12 fill-white ml-2" />}
                                <span className="text-xs font-bold text-white uppercase">{isPlaying ? 'On Air' : 'Play Report'}</span>
                            </Button>
                        </div>

                        <Button
                            className="w-full py-6 text-xl"
                            onClick={() => {
                                window.speechSynthesis.cancel();
                                setPhase('questions');
                            }}
                        >
                            <Globe className="w-6 h-6 mr-2" /> Verify Facts
                        </Button>
                    </motion.div>
                )}

                {phase === 'questions' && (
                    <motion.div
                        key="questions"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-b-3xl shadow-xl space-y-8 border-x-4 border-b-4 border-slate-200"
                    >
                        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-100 pb-4">
                            Comprehension Check
                        </h3>

                        <div className="space-y-8">
                            {currentBrief.questions.map((q) => (
                                <div key={q.id} className="space-y-3">
                                    <div className="flex gap-2 items-start">
                                        <span className={`
                                            px-2 py-0.5 rounded text-xs font-bold uppercase text-white mt-1
                                            ${q.type === 'fact' ? 'bg-blue-500' : q.type === 'opinion' ? 'bg-purple-500' : 'bg-amber-500'}
                                        `}>
                                            {q.type}
                                        </span>
                                        <p className="font-bold text-lg text-slate-700">{q.question}</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                                        {q.options.map((opt, idx) => {
                                            const isSelected = answers[`${currentBrief.id}-${q.id}`] === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleAnswer(q.id, idx)}
                                                    className={`
                                                        p-3 rounded-lg text-left text-sm font-medium border-2 transition-all
                                                        ${isSelected
                                                            ? 'bg-slate-800 border-slate-800 text-white'
                                                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}
                                                    `}
                                                >
                                                    {opt}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button onClick={submitQuestions} className="w-full py-6 bg-green-600 hover:bg-green-700 text-white">
                            Submit & Continue
                        </Button>
                    </motion.div>
                )}

                {phase === 'complete' && (
                    <motion.div
                        key="complete"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white p-12 rounded-b-3xl shadow-xl text-center space-y-6 border-x-4 border-b-4 border-slate-200"
                    >
                        <div className="text-7xl">📰</div>
                        <h2 className="text-4xl font-black text-slate-800">Broadcast Ended</h2>
                        <div className="text-2xl font-bold text-slate-500">
                            Accuracy Rating: <span className="text-indigo-600">{Math.round((score / (NEWS_BRIEFS.length * 3)) * 100)}%</span>
                        </div>
                        <Link href="/">
                            <Button className="w-full py-6">Return to Dashboard</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
