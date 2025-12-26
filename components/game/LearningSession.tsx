'use client';

import { useState } from 'react';
import { DayLesson } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { FlashCard } from '@/components/flashcard/FlashCard';
import { QuizStep } from '@/components/game/QuizStep';
import { StoryViewer } from '@/components/story/StoryViewer';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '@/lib/store';
import { ChevronRight, Check, X, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { generateAcademicPassages } from '@/lib/generator';
import { Story } from '@/lib/types';

type Phase = 'intro' | 'flashcards' | 'quiz' | 'reading' | 'complete';

export function LearningSession({ lesson, onComplete }: { lesson: DayLesson, onComplete?: () => void }) {
    const [phase, setPhase] = useState<Phase>('intro');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentReadingIndex, setCurrentReadingIndex] = useState(0);
    const [readingPassages, setReadingPassages] = useState<Story[]>([]);
    const [readingTab, setReadingTab] = useState<'fiction' | 'non-fiction'>('non-fiction');

    // Progress Actions
    const { addXp, completeDay, markWordAsWeak } = useUserStore();

    const handleNext = () => {
        if (phase === 'intro') {
            setPhase('flashcards');
            setCurrentWordIndex(0);
        } else if (phase === 'flashcards') {
            if (currentWordIndex < lesson.words.length - 1) {
                setCurrentWordIndex(prev => prev + 1);
            } else {
                setPhase('quiz');
                setCurrentWordIndex(0);
            }
        } else if (phase === 'quiz') {
            // Quiz logic handled inside Quiz View usually, but strictly linear for now
            if (currentWordIndex < lesson.words.length - 1) {
                setCurrentWordIndex(prev => prev + 1);
            } else {
                // Generate and move to reading
                const passages = generateAcademicPassages(lesson.words);
                setReadingPassages(passages);
                setPhase('reading');
                setCurrentReadingIndex(0);
            }
        } else if (phase === 'reading') {
            if (currentReadingIndex < readingPassages.length - 1) {
                setCurrentReadingIndex(prev => prev + 1);
            } else {
                setPhase('complete');
                addXp(100); // More XP for reading!
                completeDay(lesson.id);
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6 max-w-md mx-auto relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-8">
                <Link href="/">
                    <Button variant="outline" className="w-12 h-12 p-0 rounded-full flex items-center justify-center">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <div className="h-4 flex-1 mx-4 bg-slate-200 rounded-full overflow-hidden">
                    {/* Simple Progress Bar */}
                    <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{
                            width: `${phase === 'intro' ? 10 :
                                phase === 'flashcards' ? 30 + ((currentWordIndex / lesson.words.length) * 20) :
                                    phase === 'quiz' ? 50 + ((currentWordIndex / lesson.words.length) * 20) :
                                        phase === 'reading' ? 80 + ((currentReadingIndex / 2) * 20) : 100
                                }%`
                        }}
                    />
                </div>
                <div className="w-12" /> {/* Spacer */}
            </div>

            <AnimatePresence mode="wait">
                {phase === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex-1 flex flex-col items-center justify-center text-center gap-6"
                    >
                        <div className="text-8xl animate-bounce-short">🎒</div>
                        <h1 className="text-4xl font-black text-slate-800">
                            Day {lesson.dayNumber}
                        </h1>
                        <p className="text-xl text-slate-500 font-bold">
                            You will learn {lesson.words.length} new words!
                        </p>
                        <div className="grid grid-cols-1 gap-4 w-full mt-8">
                            {lesson.words.map((w, i) => (
                                <div key={w.id} className="bg-white p-4 rounded-2xl shadow-sm border-2 border-slate-100 flex items-center gap-4">
                                    <span className="text-2xl">{w.imageEmoji}</span>
                                    <span className="font-bold text-lg text-slate-700">{w.word}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto w-full pt-8">
                            <Button onClick={handleNext} className="w-full">Let's Go!</Button>
                        </div>
                    </motion.div>
                )}

                {phase === 'flashcards' && (
                    <motion.div
                        key="flashcards"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex-1 flex flex-col items-center"
                    >
                        <h2 className="text-center font-bold text-slate-400 uppercase tracking-widest mb-8">Flashcards</h2>
                        <FlashCard word={lesson.words[currentWordIndex]} />

                        <div className="mt-auto w-full pt-8 flex gap-4">
                            {currentWordIndex > 0 && (
                                <Button variant="outline" onClick={() => setCurrentWordIndex(prev => prev - 1)} className="flex-1">Back</Button>
                            )}
                            <Button onClick={handleNext} className="flex-1">
                                {currentWordIndex === lesson.words.length - 1 ? 'Start Quiz' : 'Next Word'}
                            </Button>
                        </div>
                    </motion.div>
                )}

                {phase === 'quiz' && (
                    <motion.div
                        key="quiz"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex-1 flex flex-col items-center w-full"
                    >
                        <QuizStep
                            targetWord={lesson.words[currentWordIndex]}
                            allWords={lesson.words}
                            onComplete={handleNext}
                            onWrong={(wordId) => markWordAsWeak(wordId)}
                        />
                    </motion.div>
                )}

                {phase === 'reading' && (
                    <motion.div
                        key="reading"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col items-center w-full h-full pb-4 overflow-y-auto"
                    >
                        <div className="text-center space-y-2 mb-6">
                            <h2 className="text-3xl font-bold text-slate-800">Reading Time! 📚</h2>
                            <p className="text-slate-600">See your new words in action.</p>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-1 bg-slate-100 rounded-xl mx-auto w-full max-w-sm mb-6">
                            <button
                                onClick={() => setReadingTab('non-fiction')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${readingTab === 'non-fiction'
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                Non-Fiction 🧪
                            </button>
                            <button
                                onClick={() => setReadingTab('fiction')}
                                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${readingTab === 'fiction'
                                    ? 'bg-white text-indigo-600 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                Fiction 🐉
                            </button>
                        </div>

                        {/* Stories Content */}
                        <div className="flex-1 w-full overflow-y-auto space-y-6">
                            {readingPassages.filter(s => s.type === readingTab).length > 0 ? (
                                readingPassages.filter(s => s.type === readingTab).map((story) => (
                                    <div key={story.id} className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-indigo-100 rounded-lg">
                                                {story.type === 'fiction' ? <span className="text-xl">✨</span> : <span className="text-xl">📖</span>}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800">{story.title}</h3>
                                        </div>
                                        <div className="prose prose-slate prose-lg max-w-none leading-relaxed">
                                            {story.content.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="mb-4 text-slate-700">
                                                    {paragraph.split(' ').map((word, i) => {
                                                        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
                                                        const isTarget = lesson.words.some(w => w.word.toLowerCase() === cleanWord.toLowerCase());
                                                        return isTarget ? (
                                                            <span key={i} className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">{word} </span>
                                                        ) : (
                                                            <span key={i}>{word} </span>
                                                        );
                                                    })}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-slate-400">
                                    <p>No stories available for this category yet.</p>
                                </div>
                            )}
                        </div>

                        <Button
                            className="w-full h-14 text-xl bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 mt-6"
                            onClick={() => {
                                completeDay(lesson.id);
                                addXp(100);
                                setPhase('complete');
                            }}
                        >
                            Complete Lesson 🎉
                        </Button>
                    </motion.div>
                )}

                {phase === 'complete' && (
                    <motion.div key="complete" className="flex-1 flex flex-col items-center justify-center text-center gap-6">
                        <div className="text-9xl">🎉</div>
                        <h1 className="text-4xl font-black text-slate-800">Awesome!</h1>
                        <p className="text-xl text-slate-500 font-bold">
                            You earned 50 XP!
                        </p>
                        {onComplete ? (
                            <Button onClick={onComplete} variant="success" className="w-full mt-8">Finish Lesson</Button>
                        ) : (
                            <Link href="/" className="w-full mt-8">
                                <Button variant="success">Back Home</Button>
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
