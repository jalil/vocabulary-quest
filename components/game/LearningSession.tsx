'use client';

import { useState } from 'react';
import { DayLesson } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { FlashCard } from '@/components/flashcard/FlashCard';
import { QuizStep } from '@/components/game/QuizStep';
import { ActiveRecallStep } from '@/components/game/ActiveRecallStep';
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

    const [isProcessing, setIsProcessing] = useState(false);

    // Progress Actions
    const addXp = useUserStore(state => state.addXp);
    const completeDay = useUserStore(state => state.completeDay);
    const markWordAsWeak = useUserStore(state => state.markWordAsWeak);

    const handleNext = () => {
        if (isProcessing) return;
        console.log("handleNext called. Phase:", phase, "Index:", currentWordIndex, "Total:", lesson.words.length);

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
                // Generate and move to reading using async scheduling to prevent UI freeze
                console.log("LearningSession: Finishing quiz, moving to reading...");
                setIsProcessing(true);

                // Use setTimeout to ensure state updates from previous events clear before heavy lifting
                setTimeout(() => {
                    try {
                        console.log("LearningSession: Calling generateAcademicPassages...");
                        const passages = generateAcademicPassages(lesson.words);
                        console.log("LearningSession: Generated passages:", passages);

                        if (passages && passages.length > 0) {
                            console.log("LearningSession: Setting reading passages and phase 'reading'");
                            setReadingPassages(passages);
                            setPhase('reading');
                            setCurrentReadingIndex(0);
                        } else {
                            console.warn("LearningSession: No passages generated, skipping to complete.");
                            setPhase('complete');
                            completeDay(lesson.id);
                        }
                    } catch (error) {
                        console.error("LearningSession: Failed to generate passages:", error);
                        setPhase('complete');
                        completeDay(lesson.id);
                    } finally {
                        setIsProcessing(false);
                    }
                }, 10);
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
        <div className={`min-h-screen bg-slate-50 flex flex-col p-6 mx-auto relative overflow-hidden ${phase === 'reading' ? 'max-w-2xl' : 'max-w-md'}`}>
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
                        <div className="mt-auto w-full pt-8 flex flex-col gap-3">
                            <Button onClick={handleNext} className="w-full">Let's Go!</Button>

                            {/* Admin Shortcut */}
                            {useUserStore.getState().username?.toLowerCase() === 'admin' && (
                                <Button
                                    onClick={() => {
                                        console.log("Admin Skip: Jumping to Reading Phase");
                                        try {
                                            const passages = generateAcademicPassages(lesson.words);
                                            if (passages && passages.length > 0) {
                                                setReadingPassages(passages);
                                                setPhase('reading');
                                                setCurrentReadingIndex(0);
                                            } else {
                                                console.warn("Admin Skip: No passages generated");
                                            }
                                        } catch (e) {
                                            console.error("Admin Skip Error:", e);
                                        }
                                    }}
                                    variant="outline"
                                    className="w-full text-amber-600 border-amber-200"
                                >
                                    👑 Admin: Skip to Passage
                                </Button>
                            )}
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
                        {/* Mix: Active Recall on Even indices, Multiple Choice on Odd */}
                        {currentWordIndex % 2 === 0 ? (
                            <ActiveRecallStep
                                targetWord={lesson.words[currentWordIndex]}
                                onComplete={handleNext}
                                onWrong={(wordId) => markWordAsWeak(wordId)}
                            />
                        ) : (
                            <QuizStep
                                targetWord={lesson.words[currentWordIndex]}
                                allWords={lesson.words}
                                onComplete={handleNext}
                                onWrong={(wordId) => markWordAsWeak(wordId)}
                            />
                        )}
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
                        <div className="text-center space-y-2 mb-8">
                            <h2 className="text-3xl font-bold text-slate-800">Reading Time! 📚</h2>
                            <p className="text-slate-500">See your new words in action.</p>
                        </div>

                        {/* Tabs - Larger and More Prominent */}
                        <div className="flex p-1.5 bg-slate-100 rounded-2xl mx-auto w-full max-w-md mb-8 shadow-inner">
                            <button
                                onClick={() => setReadingTab('non-fiction')}
                                className={`flex-1 py-3 text-base font-bold rounded-xl transition-all ${readingTab === 'non-fiction'
                                    ? 'bg-white text-indigo-600 shadow-md'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                Non-Fiction 🧪
                            </button>
                            <button
                                onClick={() => setReadingTab('fiction')}
                                className={`flex-1 py-3 text-base font-bold rounded-xl transition-all ${readingTab === 'fiction'
                                    ? 'bg-white text-indigo-600 shadow-md'
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
                                    <article key={story.id} className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
                                        {/* Story Header */}
                                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                                                    {story.type === 'fiction' ? <span className="text-2xl">✨</span> : <span className="text-2xl">📖</span>}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                                            </div>
                                        </div>

                                        {/* Story Content - Optimized for Reading */}
                                        <div className="px-8 py-8">
                                            <div className="prose prose-lg max-w-none">
                                                {story.content.split('\n\n').map((paragraph, idx) => {
                                                    // Helper function to render text with thesis, support, and vocab highlighting
                                                    const renderFormattedText = (text: string) => {
                                                        // 1. Split by THESIS tags
                                                        const thesisParts = text.split(/(\{\{THESIS\}\}[\s\S]*?\{\{\/THESIS\}\})/g);

                                                        return thesisParts.map((part, partIdx) => {
                                                            // Handle Thesis
                                                            if (part.startsWith('{{THESIS}}') && part.endsWith('{{/THESIS}}')) {
                                                                const thesisText = part.slice(10, -11);
                                                                return (
                                                                    <span
                                                                        key={`thesis-${partIdx}`}
                                                                        className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg border-l-4 border-red-500"
                                                                        style={{ textIndent: 0 }}
                                                                    >
                                                                        {thesisText}
                                                                        <span className="ml-2 text-[10px] uppercase tracking-widest text-red-400 font-extrabold select-none">Thesis Statement</span>
                                                                    </span>
                                                                );
                                                            }

                                                            // 2. Split remainder by SUPPORT tags
                                                            const supportParts = part.split(/(\{\{SUPPORT\}\}[\s\S]*?\{\{\/SUPPORT\}\})/g);
                                                            return supportParts.map((subPart, subIdx) => {
                                                                // Handle Support Points
                                                                if (subPart.startsWith('{{SUPPORT}}') && subPart.endsWith('{{/SUPPORT}}')) {
                                                                    return (
                                                                        <span
                                                                            key={`support-${partIdx}-${subIdx}`}
                                                                            className="font-bold text-red-600"
                                                                        >
                                                                            {subPart.slice(11, -12)}
                                                                        </span>
                                                                    );
                                                                }

                                                                // 3. Split remainder by Vocabulary (**) tags
                                                                const vocabParts = subPart.split(/(\*\*.*?\*\*)/g);
                                                                return vocabParts.map((segment, segIdx) => {
                                                                    if (segment.startsWith('**') && segment.endsWith('**')) {
                                                                        return (
                                                                            <span
                                                                                key={`vocab-${partIdx}-${subIdx}-${segIdx}`}
                                                                                className="font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md mx-0.5"
                                                                            >
                                                                                {segment.slice(2, -2)}
                                                                            </span>
                                                                        );
                                                                    }
                                                                    return <span key={`text-${partIdx}-${subIdx}-${segIdx}`}>{segment}</span>;
                                                                });
                                                            });
                                                        });
                                                    };

                                                    return (
                                                        <p
                                                            key={idx}
                                                            className="text-lg text-slate-700 leading-8 mb-6 last:mb-0"
                                                            style={{ textIndent: '2em' }}
                                                        >
                                                            {renderFormattedText(paragraph)}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </article>
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
