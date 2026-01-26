'use client';

import { useUserStore } from '@/lib/store';
import { MOCK_WORDS, ALL_LESSONS } from '@/lib/data';
import { LearningSession } from '@/components/game/LearningSession';
import { DayLesson } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, Play, Trash2, AlertTriangle } from 'lucide-react';
import { useState, use, useEffect } from 'react';
import { VocabularyWord } from '@/lib/types';
import { useRouter } from 'next/navigation';

import { generateStory } from '@/lib/generator';
import { StoryViewer } from '@/components/story/StoryViewer';
import { KnowledgeBank } from '@/components/KnowledgeBank';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const decodedSlug = decodeURIComponent(slug);
    const { customWords, completedDays, deleteCategory, completeDay } = useUserStore();
    const router = useRouter();

    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState<VocabularyWord[] | null>(null);
    const [selectedBatchId, setSelectedBatchId] = useState<string>("");
    const [generatedStory, setGeneratedStory] = useState<any>(null);

    // Knowledge Bank State
    const [isBankOpen, setIsBankOpen] = useState(false);

    // Delete Confirmation State
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    // Combine words and filter
    const allWords = isMounted ? [...MOCK_WORDS, ...customWords] : MOCK_WORDS;
    const categoryWords = allWords.filter(w => w.category?.toLowerCase() === decodedSlug.toLowerCase());

    const handleDeleteCategory = () => {
        deleteCategory(decodedSlug);
        router.push('/');
    };

    // ... (Course Mode Logic) ...

    // We want everything to be a course/lesson now, even small categories
    const isCourseMode = categoryWords.length > 0;

    // Check for pre-defined lessons for this category (e.g. Book 5)
    // ... (rest of logic) ...
    // Fix for "Cross Pollution":
    // ... existing logic ...

    // Filter Logic...
    const preDefinedLessons = ALL_LESSONS.filter(lesson => {
        // 1. If lesson has words, check if the first word matches the category
        if (lesson.words.length > 0) {
            return lesson.words[0].category?.toLowerCase() === decodedSlug.toLowerCase();
        }

        // 2. If lesson has NO words (e.g. Review Lessons), we must rely on ID conventions or subtitles
        // Fix for "Cross Pollution":
        if (lesson.id.startsWith("book5-")) {
            return decodedSlug.toLowerCase() === "grade 5";
        }

        // Fix for Books (allowing placeholders & specific IDs)
        if (lesson.id.startsWith("mita-")) {
            return decodedSlug.toLowerCase() === "books";
        }

        return false;
    }).sort((a, b) => a.dayNumber - b.dayNumber);

    // ... (LessonsToRender Logic, same as before)
    const lessonsToRender = preDefinedLessons.length > 0
        ? preDefinedLessons
        : [];

    if (preDefinedLessons.length === 0 && isCourseMode) {
        // ... (Auto-chunking logic) ...
        const isPassages = decodedSlug.toLowerCase() === 'passages';
        const BATCH_SIZE = isPassages ? 5 : 10;

        for (let i = 0; i < categoryWords.length; i += BATCH_SIZE) {
            const batchWords = categoryWords.slice(i, i + BATCH_SIZE);
            lessonsToRender.push({
                id: `cat-${decodedSlug}-day-${(i / BATCH_SIZE) + 1}`,
                dayNumber: (i / BATCH_SIZE) + 1,
                words: batchWords,
                stories: []
            });
        }
    }


    const handleGenerateStory = (type: 'fiction' | 'non-fiction') => {
        const wordsToUse = selectedBatch || categoryWords;
        const story = generateStory(type, wordsToUse);
        setGeneratedStory(story);
    };

    const startBatch = (index: number) => {
        const lesson = lessonsToRender[index];
        setSelectedBatch(lesson.words);
        setSelectedBatchId(lesson.id);
        setIsPlaying(true);
    };

    if (generatedStory) {
        // ... (Story Viewer) ...
        return (
            <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center max-w-4xl mx-auto">
                <div className="w-full h-full flex-1">
                    <StoryViewer story={generatedStory} onComplete={() => setGeneratedStory(null)} />
                </div>
            </div>
        )
    }

    if (isPlaying) {
        // ... (Learning Session Logic) ...
        const wordsToLearn = selectedBatch || categoryWords;
        const lessonId = selectedBatchId || `cat-${decodedSlug}`;

        // 1. Try to find the exact lesson by ID first (Best for Review Days or Pre-defined lessons)
        const exactLesson = ALL_LESSONS.find(l => l.id === lessonId);
        let associatedStories = exactLesson?.stories || [];

        // 2. If no exact lesson stories found, try to find associated stories based on words
        if (associatedStories.length === 0) {
            associatedStories = ALL_LESSONS.flatMap(l => l.stories || [])
                .filter(story => {
                    // simple check: does this story include any of the words we are learning?
                    if (!story.wordsIncluded) return false;
                    return wordsToLearn.some(w => story.wordsIncluded.includes(w.id));
                });
        }

        // Deduplicate stories by ID
        const uniqueStories = Array.from(new Map(associatedStories.map(s => [s.id, s])).values());

        // Parse day number
        // 1. Prefer the real data from the found lesson
        // 2. Fallback to parsing ID for generated batches
        let dayNum = 0;
        if (exactLesson) {
            dayNum = exactLesson.dayNumber;
        } else {
            // Match "day-X" OR "mita-X"
            const dayNumberMatch = lessonId.match(/(?:day|mita)-(\d+)$/i);
            dayNum = dayNumberMatch ? parseInt(dayNumberMatch[1]) : 0;
        }

        const customLesson: DayLesson = {
            id: lessonId,
            dayNumber: dayNum,
            words: wordsToLearn,
            stories: uniqueStories
        };
        return <LearningSession lesson={customLesson} onComplete={() => {
            setIsPlaying(false);
            setSelectedBatch(null);
        }} onExit={() => setIsPlaying(false)} />;
    }

    const isBooks = decodedSlug === 'Books';

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6 max-w-7xl mx-auto">
            {/* Knowledge Bank Modal */}
            <KnowledgeBank
                isOpen={isBankOpen}
                onClose={() => setIsBankOpen(false)}
                completedDays={completedDays}
            />

            {/* Header & Delete Button */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="outline" className="w-12 h-12 p-0 rounded-full flex items-center justify-center">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-slate-800 uppercase">{decodedSlug}</h1>
                        {isCourseMode && <p className="text-slate-500 font-bold">Complete Course • {categoryWords.length} Words</p>}
                    </div>
                </div>

                {/* Mita Bank Button */}
                {isBooks && (
                    <Button
                        onClick={() => setIsBankOpen(true)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg border-b-4 border-indigo-800 active:border-b-0 active:translate-y-1"
                    >
                        <span className="mr-2">📖</span> Open Evidence Vault
                    </Button>
                )}

                {/* Delete Button Area - Only show if not Mita/Grade 6 to protect core content? Or universal. Keeping universal for now */}
                {!isBooks && (
                    <div className="relative">
                        {!isDeleteConfirmOpen ? (
                            <button
                                onClick={() => setIsDeleteConfirmOpen(true)}
                                className="p-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-colors"
                                title="Delete Category"
                            >
                                <Trash2 className="w-6 h-6" />
                            </button>
                        ) : (
                            <div className="absolute right-0 top-0 flex items-center gap-2 bg-white p-2 rounded-xl shadow-xl border-2 border-red-100 animate-in fade-in slide-in-from-right-4 z-10 w-64">
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-red-500 uppercase">Are you sure?</p>
                                    <p className="text-[10px] text-slate-400 leading-tight">This will hide this category.</p>
                                </div>
                                <button
                                    onClick={handleDeleteCategory}
                                    className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => setIsDeleteConfirmOpen(false)}
                                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs font-bold"
                                >
                                    No
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {categoryWords.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-xl font-bold text-slate-400">No words found in this category.</p>
                </div>
            ) : isCourseMode ? (
                // COURSE MODE: Grid of Days
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {lessonsToRender.map((lesson, idx) => {
                        const dayNum = lesson.dayNumber;
                        const dayId = lesson.id;
                        const isCompleted = isMounted ? completedDays.includes(dayId) : false;

                        return (
                            <div
                                key={lesson.id}
                                onClick={() => startBatch(idx)}
                                className={`
                                    cursor-pointer p-6 rounded-3xl border-b-8 transition-transform hover:scale-105 active:scale-95 flex flex-col
                                    ${isCompleted ? 'bg-emerald-400 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-800'}
                                `}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h3 className="text-2xl font-black">Day {dayNum}</h3>
                                        {lesson.subtitle && (
                                            <p className={`text-sm font-bold leading-tight ${isCompleted ? 'text-emerald-100' : 'text-orange-500'}`}>
                                                {lesson.subtitle}
                                            </p>
                                        )}
                                    </div>
                                    {isCompleted ? (
                                        <div className="bg-white/20 p-2 rounded-full">🏆</div>
                                    ) : (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                completeDay(dayId);
                                            }}
                                            className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transaction-colors"
                                            title="Debug: Click to Complete"
                                        >
                                            🔒
                                        </button>
                                    )}
                                </div>
                                <div className="flex -space-x-2 mb-4 overflow-hidden h-10 w-full mt-auto pt-2">
                                    {lesson.words.slice(0, 5).map(w => (
                                        <div key={w.id} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs shadow-sm">
                                            {w.imageEmoji}
                                        </div>
                                    ))}
                                    {lesson.words.length > 5 && (
                                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                                            +{lesson.words.length - 5}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                                    <Play className="w-4 h-4" />
                                    <span>{isCompleted ? 'Review' : 'Start'} Lesson</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                // STANDARD LIST MODE
                <>
                    <div className="grid md:grid-cols-2 gap-6 mb-20 items-start">
                        {/* Sidebar: Stats & Actions */}
                        <div className="space-y-6 md:sticky md:top-8">
                            {/* Stats Card */}
                            <div className="p-6 bg-violet-100 rounded-3xl flex items-center justify-between shadow-sm">
                                <div>
                                    <h2 className="text-4xl font-black text-violet-600 mb-2">{categoryWords.length}</h2>
                                    <p className="font-bold text-violet-400 uppercase tracking-widest">Words</p>
                                </div>
                                <div className="text-6xl">📚</div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-3 w-full">
                                <div className="grid grid-cols-2 gap-3">
                                    <Button onClick={() => handleGenerateStory('fiction')} variant="secondary" className="text-lg h-14">
                                        🦄 Fiction
                                    </Button>
                                    <Button onClick={() => handleGenerateStory('non-fiction')} variant="accent" className="text-lg h-14">
                                        📜 Fact
                                    </Button>
                                </div>
                                <Button onClick={() => setIsPlaying(true)} variant="primary" className="py-6 text-xl shadow-xl w-full">
                                    <Play className="w-6 h-6 mr-2" />
                                    Start Session
                                </Button>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-4">
                            {categoryWords.map(w => (
                                <div key={w.id} className="bg-white p-4 rounded-2xl border-b-4 border-slate-100 flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{w.word}</h3>
                                        <p className="text-sm text-slate-400">{w.pronunciation}</p>
                                    </div>
                                    <span className="text-2xl">{w.imageEmoji}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
