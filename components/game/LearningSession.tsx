'use client';

import { useState, useEffect } from 'react';
import { DayLesson, Question } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { FlashCard } from '@/components/flashcard/FlashCard';
import { QuizStep } from '@/components/game/QuizStep';
import { ActiveRecallStep } from '@/components/game/ActiveRecallStep';
import { StoryViewer } from '@/components/story/StoryViewer';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '@/lib/store';
import { ChevronRight, Check, X, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

import { generateAcademicPassages } from '@/lib/generator';
import { Story } from '@/lib/types';
import RiddleRun from './RiddleRun';
import { CrosswordSession } from './CrosswordSession';

type Phase = 'intro' | 'flashcards' | 'quiz' | 'reading' | 'complete';

export function LearningSession({ lesson, onComplete, onExit }: { lesson: DayLesson, onComplete?: () => void, onExit?: () => void }) {
    const [phase, setPhase] = useState<Phase>(() => {
        // If it's a "Passages" lesson OR has no words (e.g. Review Day), skip directly to reading
        // Check for 'passages' in ID (case-insensitive) to handle 'cat-Passages-day-1' format
        if (lesson.id.toLowerCase().includes('passages') || lesson.words.length === 0) {
            return 'reading';
        }
        return 'intro';
    });
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentReadingIndex, setCurrentReadingIndex] = useState(0);
    const [readingPassages, setReadingPassages] = useState<Story[]>([]);
    const [activeStoryIndex, setActiveStoryIndex] = useState(-1);
    const [startTime] = useState(Date.now()); // Initialize start time on mount

    // Interactive Quiz State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [feedback, setFeedback] = useState<Record<string, 'correct' | 'wrong'>>({});
    const [optionFeedback, setOptionFeedback] = useState<Record<string, 'correct' | 'wrong'>>({});
    const [combo, setCombo] = useState(0);
    const [completedStories, setCompletedStories] = useState<Set<string>>(new Set());
    const [textInputs, setTextInputs] = useState<Record<string, string>>({});

    const handleTextSubmit = (q: Question) => {
        const text = textInputs[q.id]?.trim() || '';
        if (!text) return;

        const isCorrect = text.toLowerCase() === q.correctAnswer?.toLowerCase();

        if (isCorrect) {
            setFeedback(prev => ({ ...prev, [q.id]: 'correct' }));
            setCombo(prev => prev + 1);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#22c55e', '#fbbf24', '#f472b6']
            });
        } else {
            setFeedback(prev => ({ ...prev, [q.id]: 'wrong' }));
            setCombo(0);

            // Allow retrying
            setTimeout(() => {
                setFeedback(prev => {
                    const newFeedback = { ...prev };
                    delete newFeedback[q.id];
                    return newFeedback;
                });
            }, 800);
        }
    };

    const handleOptionClick = (q: Question, option: string) => {
        // Track the selected answer immediately
        setSelectedAnswers(prev => ({ ...prev, [q.id]: option }));

        const key = `${q.id}-${option}`;
        let isCorrect = false;

        if (q.correctAnswers && q.correctAnswers.length > 0) {
            isCorrect = q.correctAnswers.includes(option);
        } else {
            isCorrect = option === q.correctAnswer;
        }

        if (isCorrect) {
            setOptionFeedback(prev => ({ ...prev, [key]: 'correct' }));

            // For single choice, we also set the question-level feedback to lock it
            if (!q.correctAnswers) {
                setFeedback(prev => ({ ...prev, [q.id]: 'correct' }));
            }

            setCombo(prev => prev + 1);

            // Trigger confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#22c55e', '#fbbf24', '#f472b6']
            });
        } else {
            setOptionFeedback(prev => ({ ...prev, [key]: 'wrong' }));
            // Only set global wrong feedback for single choice
            if (!q.correctAnswers) {
                setFeedback(prev => ({ ...prev, [q.id]: 'wrong' }));
            }

            setCombo(0);

            // Allow retrying after animation
            setTimeout(() => {
                setOptionFeedback(prev => {
                    const newFeedback = { ...prev };
                    delete newFeedback[key];
                    return newFeedback;
                });

                if (!q.correctAnswers) {
                    setFeedback(prev => {
                        const newFeedback = { ...prev };
                        delete newFeedback[q.id];
                        return newFeedback;
                    });
                }

                // Clear selection
                setSelectedAnswers(prev => {
                    const newSelected = { ...prev };
                    delete newSelected[q.id];
                    return newSelected;
                });
            }, 800);
        }
    };

    const handleCompleteStory = (storyId: string) => {
        // Calculate WPM if we have a start time
        if (storyStartTime > 0) {
            const story = readingPassages.find(s => s.id === storyId);
            if (story) {
                const durationMinutes = (Date.now() - storyStartTime) / 1000 / 60;
                // Rough word count (split by spaces)
                const wordCount = story.content ? story.content.split(/\s+/).length : 0;

                if (durationMinutes > 0 && wordCount > 0) {
                    const wpm = Math.round(wordCount / durationMinutes);
                    setStoryWpms(prev => ({ ...prev, [storyId]: wpm }));

                    // Specific WPM Toast
                    confetti({
                        particleCount: 50,
                        spread: 40,
                        origin: { y: 0.8 },
                        colors: ['#3b82f6']
                    });

                    // You could add a specialized toast here for speed feedback
                }
            }
        }

        setCompletedStories(prev => {
            const newSet = new Set(prev);
            newSet.add(storyId);
            return newSet;
        });

        // Huge Celebration Confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };

    const [isProcessing, setIsProcessing] = useState(false);

    // Progress Actions
    const addXp = useUserStore(state => state.addXp);
    const completeDay = useUserStore(state => state.completeDay);
    const markWordAsWeak = useUserStore(state => state.markWordAsWeak);

    // Curriculum Filter Helper
    const getVisibleStories = (lessonId: string, stories: Story[]) => {
        // Only apply filter to Book 6 (ID: "day-6-XX")
        // Check for 'day-6-' prefix to target Book 6 specifically
        if (!lessonId.startsWith('day-6-')) {
            return stories;
        }

        return stories.filter(s => {
            const t = s.title.toLowerCase();
            const upperTitle = s.title.toUpperCase();

            // Whitelist Logic:
            // 1. "Reading Passage" (Keep)
            if (t.includes('reading passage')) return true;

            // 2. Sections A and B ONLY
            // We want titles like "19A Finding Meanings", "2B Just the Right Word"
            // We DO NOT want "19C Applying Meanings", "19D Word Study"

            // Regex matches: Start of string -> Number -> 'A' or 'B' -> Space or End of String
            // This strictly enforces A or B subsections.
            // Example: "19A " matches. "19C " does not.
            const sectionABPattern = /^\d+[AB](\s|$)/;

            if (sectionABPattern.test(upperTitle)) {
                return true;
            }

            // 3. Fallback for potential naming variations or Specific Exceptions

            // Exception: Allow "Word Study" specifically for whitelisted lessons
            const wordStudyWhitelist = ['day-6-1', 'day-6-3', 'day-6-5', 'day-6-9', 'day-6-13', 'day-6-15', 'day-6-17'];
            if (wordStudyWhitelist.includes(lessonId) && t.includes('word study')) {
                return true;
            }

            // Standard Whitelist logic remains
            if (t.includes('finding meanings') || t.includes('just the right word') || t.includes('using words in context')) {
                return true;
            }

            return false;
        });
    };

    // Sync stories from lesson if they change (e.g. new exercise added)
    useEffect(() => {
        if (lesson.stories && lesson.stories.length > 0) {
            // Apply filter when syncing
            const filteredStories = getVisibleStories(lesson.id, lesson.stories);
            if (filteredStories.length !== readingPassages.length) {
                console.log("LearningSession: Syncing new stories from lesson data (filtered)");
                setReadingPassages(filteredStories);
            }
        }
    }, [lesson.stories, lesson.id, readingPassages.length]); // Added lesson.id dependency

    // If we start in 'reading' phase (Passages mode), ensure reading passages are set
    useEffect(() => {
        if (phase === 'reading' && readingPassages.length === 0) {
            console.log("LearningSession: Initializing reading phase with stories");
            if (lesson.stories && lesson.stories.length > 0) {
                // Apply filter
                const filtered = getVisibleStories(lesson.id, lesson.stories);
                setReadingPassages(filtered);
            } else {
                let generated = generateAcademicPassages(lesson.words);
                // Apply filter (though generated usually strictly makes reading passages, good to be safe)
                generated = getVisibleStories(lesson.id, generated);
                setReadingPassages(generated);
            }
        }
    }, [phase, lesson, readingPassages.length]);


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
            // Check if Mita Word Study
            const wordStudy = (lesson as any).wordStudy;
            const totalQuestions = wordStudy && wordStudy.length > 0 ? wordStudy.length : lesson.words.length;

            // Quiz logic handled inside Quiz View usually, but strictly linear for now
            if (currentWordIndex < totalQuestions - 1) {
                console.log("LearningSession: Advancing to next word", currentWordIndex + 1);
                setCurrentWordIndex(prev => prev + 1);
            } else {
                // Generate and move to reading using async scheduling to prevent UI freeze
                console.log("LearningSession: Finishing quiz, starting transition logic...");
                setIsProcessing(true);

                // Use setTimeout to ensure state updates from previous events clear before heavy lifting
                setTimeout(() => {
                    console.log("LearningSession: executing transition timeout callback");
                    try {
                        let passages: Story[] = [];

                        // 1. Check if lesson already has stories (e.g. Passages category)
                        if (lesson.stories && lesson.stories.length > 0) {
                            console.log("LearningSession: Using pre-defined stories from lesson", lesson.stories.length);
                            passages = lesson.stories;
                        } else {
                            // 2. Otherwise, generate them
                            console.log("LearningSession: Calling generateAcademicPassages with words:", lesson.words.length);
                            passages = generateAcademicPassages(lesson.words);
                            console.log("LearningSession: Generated passages:", passages?.length);
                        }

                        // Apply Curriculum Filter
                        passages = getVisibleStories(lesson.id, passages);
                        console.log("LearningSession: Filtered passages:", passages?.length);

                        if (passages && passages.length > 0) {
                            console.log("LearningSession: Setting reading passages and phase 'reading'");
                            setReadingPassages(passages);
                            setPhase('reading');
                            setCurrentReadingIndex(0);
                        } else {
                            console.warn("LearningSession: No passages generated (or all filtered out), skipping to complete.");
                            setPhase('complete');
                            completeDay(lesson.id);
                        }
                    } catch (error) {
                        console.error("LearningSession: Failed to generate/load passages:", error);
                        setPhase('complete');
                        completeDay(lesson.id);
                    } finally {
                        console.log("LearningSession: Resetting isProcessing to false");
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
                {onExit ? (
                    <Button variant="outline" onClick={onExit} className="w-12 h-12 p-0 rounded-full flex items-center justify-center">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                ) : (
                    <Link href="/">
                        <Button variant="outline" className="w-12 h-12 p-0 rounded-full flex items-center justify-center">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                )}
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
                                            // Check for pre-defined stories first
                                            if (lesson.stories && lesson.stories.length > 0) {
                                                console.log("Admin Skip: Using pre-defined stories");
                                                const filtered = getVisibleStories(lesson.id, lesson.stories);
                                                setReadingPassages(filtered);
                                                setPhase('reading');
                                                setCurrentReadingIndex(0);
                                                return;
                                            }

                                            // Fallback to generation
                                            let passages = generateAcademicPassages(lesson.words);
                                            passages = getVisibleStories(lesson.id, passages);

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
                        {/* Mita Word Study Logic */}
                        {lesson.wordStudy && lesson.wordStudy.length > 0 ? (
                            <QuizStep
                                // Safely access current index for custom questions
                                customQuestion={lesson.wordStudy[Math.min(currentWordIndex, lesson.wordStudy.length - 1)]}
                                onComplete={handleNext}
                            />
                        ) : (
                            /* Standard Vocab Quiz (Mix: Active Recall on Even indices, Multiple Choice on Odd) */
                            currentWordIndex % 2 === 0 ? (
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
                            )
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

                        {/* Game Selector - Large Fun Buttons (Hidden for Books) */}
                        {!lesson.id.startsWith('mita') && (
                            <div className="flex flex-wrap justify-center gap-4 mb-8 px-2">
                                {readingPassages.map((story, idx) => {
                                    const getTheme = (title: string, hasCrossword?: boolean) => {
                                        if (hasCrossword) return {
                                            gradient: 'from-blue-600 to-indigo-600',
                                            lightBg: 'bg-blue-50',
                                            border: 'border-blue-200',
                                            icon: '🧩'
                                        };
                                        const t = title.toLowerCase();
                                        if (t.includes('word')) return {
                                            gradient: 'from-blue-400 to-cyan-400',
                                            lightBg: 'bg-blue-50',
                                            border: 'border-blue-200',
                                            icon: '✍️'
                                        };
                                        if (t.includes('meanings')) return {
                                            gradient: 'from-pink-400 to-rose-400',
                                            lightBg: 'bg-pink-50',
                                            border: 'border-pink-200',
                                            icon: '🧠'
                                        };
                                        if (t.includes('context')) return {
                                            gradient: 'from-amber-400 to-orange-400',
                                            lightBg: 'bg-orange-50',
                                            border: 'border-orange-200',
                                            icon: '🕵️'
                                        };
                                        if (t.includes('facts')) return {
                                            gradient: 'from-violet-400 to-purple-400',
                                            lightBg: 'bg-violet-50',
                                            border: 'border-violet-200',
                                            icon: '🤯'
                                        };
                                        if (t.includes('study')) return {
                                            gradient: 'from-emerald-400 to-teal-400',
                                            lightBg: 'bg-emerald-50',
                                            border: 'border-emerald-200',
                                            icon: '📚'
                                        };
                                        return {
                                            gradient: 'from-indigo-400 to-purple-400',
                                            lightBg: 'bg-indigo-50',
                                            border: 'border-indigo-200',
                                            icon: '✨'
                                        };
                                    };

                                    const theme = getTheme(story.title, !!story.crossword);
                                    const isActive = activeStoryIndex === idx;

                                    return (
                                        <motion.button
                                            key={story.id}
                                            onClick={() => {
                                                setActiveStoryIndex(idx);
                                                setStoryStartTime(Date.now());
                                            }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`
                                                relative h-32 w-full sm:w-64 lg:w-72 rounded-3xl p-4 text-left shadow-xl transition-all border-4
                                                flex flex-col justify-between overflow-hidden
                                                ${isActive
                                                    ? `bg-gradient-to-br ${theme.gradient} border-white ring-4 ring-offset-2 ring-indigo-200 text-white`
                                                    : `${theme.lightBg} ${theme.border} text-slate-600 hover:border-indigo-300`}
                                            `}
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl transform rotate-12 select-none">
                                                {(() => {
                                                    const t = story.title.toLowerCase();
                                                    if (t.includes('word')) return '✍️';
                                                    if (t.includes('meanings')) return '🧠';
                                                    if (t.includes('context')) return '🕵️';
                                                    if (t.includes('facts')) return '🤯';
                                                    if (t.includes('study')) return '📚';
                                                    return '✨';
                                                })()}
                                            </div>

                                            <div className="relative z-10">

                                                <h3 className={`text-xl font-black leading-tight mt-1 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                                    {story.title.replace('Exercise: ', '')}
                                                </h3>
                                            </div>

                                            {completedStories.has(story.id) && (
                                                <div className={`mt-auto self-end px-3 py-1 rounded-full text-xs font-bold ${isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-400'}`}>
                                                    COMPLETED ★
                                                </div>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Stories Content */}
                        <div className="flex-1 w-full overflow-y-auto space-y-6">
                            {readingPassages.length > 0 && activeStoryIndex >= 0 && readingPassages[activeStoryIndex] ? (
                                (() => {
                                    const story = readingPassages[activeStoryIndex];
                                    return (
                                        <article key={story.id} className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            {/* Story Header */}
                                            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm">
                                                        <span className="text-2xl">📝</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                                                </div>
                                            </div>

                                            {/* Word Bank for Finding Meanings and Using Words in Context */}
                                            {(story.title.toLowerCase().includes('finding meanings') || story.title.toLowerCase().includes('using words in context')) && (
                                                <div className="bg-indigo-50 border-b border-indigo-100 p-6">
                                                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">Word Bank</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {lesson.words.map((w) => (
                                                            <span key={w.id} className="bg-white px-3 py-1.5 rounded-lg border border-indigo-100 text-indigo-700 font-bold shadow-sm text-sm">
                                                                {w.word}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Story Content - Optimized for Reading */}
                                            {story.type === 'review-riddle' ? (
                                                <div className="py-8">
                                                    <RiddleRun onComplete={() => handleCompleteStory(story.id)} />
                                                </div>
                                            ) : (
                                                <div className="px-8 py-8">
                                                    <div className="prose prose-lg max-w-none">
                                                        {story.content.split('\n\n').map((paragraph, idx) => {
                                                            // Helper function to render text with thesis, support, and vocab highlighting
                                                            const renderFormattedText = (text: string) => {
                                                                const thesisParts = text.split(/(\{\{THESIS\}\}[\s\S]*?\{\{\/THESIS\}\})/g);
                                                                return thesisParts.map((part, partIdx) => {
                                                                    if (part.startsWith('{{THESIS}}') && part.endsWith('{{/THESIS}}')) {
                                                                        return (
                                                                            <span key={`thesis-${partIdx}`} className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg border-l-4 border-red-500" style={{ textIndent: 0 }}>
                                                                                {part.slice(10, -11)}
                                                                                <span className="ml-2 text-[10px] uppercase tracking-widest text-red-400 font-extrabold select-none">Thesis Statement</span>
                                                                            </span>
                                                                        );
                                                                    }
                                                                    const supportParts = part.split(/(\{\{SUPPORT\}\}[\s\S]*?\{\{\/SUPPORT\}\})/g);
                                                                    return supportParts.map((subPart, subIdx) => {
                                                                        if (subPart.startsWith('{{SUPPORT}}') && subPart.endsWith('{{/SUPPORT}}')) {
                                                                            return <span key={`support-${partIdx}-${subIdx}`} className="font-bold text-red-600">{subPart.slice(11, -12)}</span>;
                                                                        }
                                                                        const vocabParts = subPart.split(/(\*\*.*?\*\*)/g);
                                                                        return vocabParts.map((segment, segIdx) => {
                                                                            if (segment.startsWith('**') && segment.endsWith('**')) {
                                                                                return <span key={`vocab-${partIdx}-${subIdx}-${segIdx}`} className="font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md mx-0.5">{segment.slice(2, -2)}</span>;
                                                                            }

                                                                            // Check for italics (*text*)
                                                                            const italicParts = segment.split(/(\*[^*]+\*)/g);
                                                                            return (
                                                                                <span key={`text-${partIdx}-${subIdx}-${segIdx}`}>
                                                                                    {italicParts.map((itSeg, itIdx) => {
                                                                                        if (itSeg.startsWith('*') && itSeg.endsWith('*') && itSeg.length > 2) {
                                                                                            return <em key={itIdx} className="italic text-slate-800 font-serif">{itSeg.slice(1, -1)}</em>;
                                                                                        }
                                                                                        return <span key={itIdx}>{itSeg}</span>;
                                                                                    })}
                                                                                </span>
                                                                            );
                                                                        });
                                                                    });
                                                                });
                                                            };
                                                            // Header detection
                                                            // Header detection
                                                            const trimmed = paragraph.trim();
                                                            if (trimmed === '# Fun & Fascinating FACTS') {
                                                                return (
                                                                    <div key={idx} className="flex flex-wrap items-center justify-center gap-3 my-8">
                                                                        <span className="text-4xl font-serif font-black text-orange-500 tracking-wide">Fun</span>
                                                                        <div className="relative w-12 h-12 flex items-center justify-center">
                                                                            <div className="absolute inset-0 bg-amber-400 rounded-full"></div>
                                                                            <span className="relative z-10 text-3xl font-black text-black font-sans">&</span>
                                                                        </div>
                                                                        <span className="text-4xl font-serif font-black text-orange-500 tracking-wide">Fascinating</span>
                                                                        <span className="text-4xl font-black text-black font-sans tracking-tight">FACTS</span>
                                                                    </div>
                                                                );
                                                            }

                                                            if (trimmed.startsWith('# ')) {
                                                                return (
                                                                    <h2 key={idx} className="text-3xl font-black text-center text-orange-500 my-8">
                                                                        {trimmed.replace('# ', '')}
                                                                    </h2>
                                                                );
                                                            }

                                                            if ((trimmed.startsWith('* ') || trimmed.includes('\n* ')) && !story.title.includes('Fun & Fascinating')) {
                                                                const items = trimmed.split('\n').filter(line => line.trim().startsWith('* '));
                                                                return (
                                                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                                                        {items.map((item, i) => (
                                                                            <div key={i} className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center shadow-sm">
                                                                                <span className="text-indigo-500 mr-2 text-xl">•</span>
                                                                                <span className="text-slate-700 font-medium">
                                                                                    {renderFormattedText(item.replace('* ', ''))}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                );
                                                            }

                                                            return (
                                                                <div key={idx} className="mb-6 last:mb-0">
                                                                    <p className="text-lg text-slate-700 leading-8" style={{ textIndent: '2em' }}>
                                                                        {renderFormattedText(paragraph)}
                                                                    </p>
                                                                    {story.title.includes('Fun & Fascinating') && idx < story.content.split('\n\n').length - 1 && (
                                                                        <div className="flex justify-center my-6 opacity-30">
                                                                            <div className="flex gap-2">
                                                                                {[...Array(12)].map((_, i) => (
                                                                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Crossword Game - Render Fullscreen Overlay */}
                                            {story.crossword && (
                                                <div className="fixed inset-0 z-50 bg-slate-50 flex flex-col">
                                                    <CrosswordSession
                                                        data={story.crossword}
                                                        onComplete={() => handleCompleteStory(story.id)}
                                                    />
                                                </div>
                                            )}

                                            {/* Questions & Completion Section */}
                                            <div className="px-8 pb-8 space-y-8 mt-8 border-t-2 border-slate-100 pt-8 relative">
                                                <AnimatePresence>
                                                    {combo > 1 && (
                                                        <motion.div initial={{ opacity: 0, scale: 0, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0 }} className="fixed top-32 right-6 z-50 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-2xl px-6 py-3 rounded-full shadow-xl border-4 border-yellow-400 rotate-3 animate-pulse">
                                                            {combo}x COMBO! 🔥
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {story.questions && story.questions.map((q, idx) => {
                                                    const isQuestionDone = feedback[q.id] === 'correct';
                                                    return (
                                                        <motion.div key={q.id} className={`bg-slate-50 p-6 rounded-2xl border-2 transition-colors duration-300 ${isQuestionDone ? 'border-green-400 bg-green-50' : 'border-slate-200'}`}>
                                                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex gap-3">
                                                                <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm shrink-0 transition-colors ${isQuestionDone ? 'bg-green-500 text-white' : 'bg-amber-100 text-amber-700'}`}>{isQuestionDone ? '✓' : idx + 1}</span>
                                                                <span dangerouslySetInnerHTML={{ __html: q.question.replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-600">$1</strong>').replace(/\*([^*]+)\*/g, '<em class="italic text-indigo-600 font-bold">$1</em>') }} />
                                                            </h3>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                {q.options && q.options.length > 0 ? (
                                                                    q.options.map((opt) => {
                                                                        const key = `${q.id}-${opt}`;
                                                                        const status = optionFeedback[key];
                                                                        const isOptCorrect = status === 'correct';
                                                                        const isOptWrong = status === 'wrong';
                                                                        return (
                                                                            <motion.button key={opt} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
                                                                                animate={isOptWrong ? { x: [0, -10, 10, -10, 10, 0], backgroundColor: '#fee2e2', borderColor: '#ef4444' } : isOptCorrect ? { scale: [1, 1.05, 1], backgroundColor: '#dcfce7', borderColor: '#22c55e' } : {}}
                                                                                onClick={() => handleOptionClick(q, opt)}
                                                                                disabled={isOptCorrect || (!q.correctAnswers && isQuestionDone)}
                                                                                className={`relative overflow-hidden w-full justify-start text-left h-auto py-4 px-6 text-base font-bold rounded-xl border-2 shadow-sm ${isOptCorrect ? 'bg-green-100 text-green-800 border-green-500 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}`}
                                                                            >
                                                                                <div className="flex items-center justify-between w-full">
                                                                                    <span>{opt}</span>
                                                                                    {isOptCorrect && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-xl">🎉</motion.span>}
                                                                                </div>
                                                                            </motion.button>
                                                                        );
                                                                    })
                                                                ) : (
                                                                    <div className="col-span-1 sm:col-span-2 flex gap-2">
                                                                        <input
                                                                            type="text"
                                                                            disabled={isQuestionDone}
                                                                            value={textInputs[q.id] || ''}
                                                                            onChange={(e) => setTextInputs(prev => ({ ...prev, [q.id]: e.target.value }))}
                                                                            onKeyDown={(e) => e.key === 'Enter' && handleTextSubmit(q)}
                                                                            placeholder="Type your answer..."
                                                                            className={`flex-1 p-4 rounded-xl border-2 outline-none font-bold text-lg transition-colors ${feedback[q.id] === 'correct' ? 'border-green-500 bg-green-50 text-green-700' :
                                                                                feedback[q.id] === 'wrong' ? 'border-red-500 bg-red-50 text-red-700' :
                                                                                    'border-slate-200 focus:border-indigo-500 text-slate-700'
                                                                                }`}
                                                                        />
                                                                        <Button
                                                                            onClick={() => handleTextSubmit(q)}
                                                                            disabled={isQuestionDone || !textInputs[q.id]}
                                                                            className={`px-6 rounded-xl font-bold text-lg ${isQuestionDone ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
                                                                                }`}
                                                                        >
                                                                            {isQuestionDone ? 'Correct!' : 'Check'}
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}

                                                <div className="mt-12 flex justify-center">
                                                    {completedStories.has(story.id) ? (
                                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-2">
                                                            <div className="bg-green-100 text-green-700 border-2 border-green-200 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3">
                                                                <span>Exercise Completed!</span><span className="text-2xl">🌟</span>
                                                            </div>
                                                            {storyWpms[story.id] && (
                                                                <div className="text-sm font-bold text-slate-400 bg-slate-100 px-4 py-1 rounded-full">
                                                                    Reading Speed: <span className={storyWpms[story.id] >= 150 ? 'text-green-600' : 'text-orange-500'}>{storyWpms[story.id]} WPM</span>
                                                                </div>
                                                            )}
                                                        </motion.div>
                                                    ) : (
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => handleCompleteStory(story.id)}
                                                            // Only disable if there are questions and they aren't all answered
                                                            disabled={story.questions && story.questions.some(q => feedback[q.id] !== 'correct')}
                                                            className={`w-full sm:w-auto text-white shadow-xl shadow-indigo-200 text-xl font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all ${story.questions && story.questions.some(q => feedback[q.id] !== 'correct')
                                                                ? 'bg-slate-300 cursor-not-allowed shadow-none'
                                                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                                                                }`}
                                                        >
                                                            <span>Finish Exercise</span><span>✅</span>
                                                        </motion.button>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })()
                            ) : (
                                <div className="text-center py-12 text-slate-400">
                                    {readingPassages.length > 0 && activeStoryIndex === -1 ? (
                                        <div className="animate-pulse">
                                            <p className="text-xl font-bold text-indigo-400">Select an exercise above to begin! 👆</p>
                                        </div>
                                    ) : (
                                        <p>No stories available for this category yet.</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="mt-8">
                            <Button
                                disabled={completedStories.size < readingPassages.length}
                                className={`w-full h-14 text-xl rounded-xl shadow-lg transition-all ${completedStories.size === readingPassages.length
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                                onClick={() => {
                                    if (completedStories.size === readingPassages.length) {
                                        // Calculate Stats
                                        const endTime = Date.now();
                                        const duration = Math.round((endTime - startTime) / 1000);
                                        const totalQuestions = readingPassages.reduce((acc, s) => acc + (s.questions?.length || 0), 0);
                                        const wrongAnswers = Object.values(feedback).filter(f => f === 'wrong').length;
                                        // Simple score: (Total - Wrong (unique)) / Total. 
                                        // Note: Feedback logic tracks per question ID, so unique wrong is roughly correct if we don't clear it.
                                        // But logic clears feedback on retry?
                                        // Let's rely on `feedback` map which seems to hold current status.
                                        // Correct count is better.
                                        const correctCount = Object.values(feedback).filter(f => f === 'correct').length;
                                        const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 100;

                                        // Calculate Average WPM
                                        const wpms = Object.values(storyWpms);
                                        const avgWpm = wpms.length > 0 ? Math.round(wpms.reduce((a, b) => a + b, 0) / wpms.length) : undefined;

                                        useUserStore.getState().recordExerciseCompletion({
                                            id: `${lesson.id}-${endTime}`,
                                            lessonId: lesson.id,
                                            lessonTitle: lesson.subtitle || `Lesson ${lesson.dayNumber}`,
                                            timestamp: endTime,
                                            durationSeconds: duration,
                                            score: score,
                                            totalQuestions: totalQuestions,
                                            mistakes: [], // We'd need to track this better, passing empty for now
                                            readingSpeedWpm: avgWpm
                                        });

                                        completeDay(lesson.id);
                                        addXp(100);
                                        setPhase('complete');
                                    }
                                }}
                            >
                                {completedStories.size === readingPassages.length
                                    ? 'Complete Lesson 🎉'
                                    : `Complete All Exercises (${completedStories.size}/${readingPassages.length})`
                                }
                            </Button>
                        </div>
                    </motion.div >
                )
                }

                {
                    phase === 'complete' && (
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
                    )
                }
            </AnimatePresence >
        </div >
    );
}
