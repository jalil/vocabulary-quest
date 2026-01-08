'use client';

import { useUserStore } from '@/lib/store';
import { MOCK_WORDS } from '@/lib/data';
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

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const decodedSlug = decodeURIComponent(slug);
    const { customWords, completedDays, deleteCategory, completeDay } = useUserStore();
    const router = useRouter();

    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState<VocabularyWord[] | null>(null);
    const [selectedBatchId, setSelectedBatchId] = useState<string>("");
    const [generatedStory, setGeneratedStory] = useState<any>(null);

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

    // COURSE MODE LOGIC
    const isCourseMode = categoryWords.length >= 20;
    const BATCH_SIZE = 10;
    const batches: VocabularyWord[][] = [];
    if (isCourseMode) {
        for (let i = 0; i < categoryWords.length; i += BATCH_SIZE) {
            batches.push(categoryWords.slice(i, i + BATCH_SIZE));
        }
    }

    const handleGenerateStory = (type: 'fiction' | 'non-fiction') => {
        const wordsToUse = selectedBatch || categoryWords;
        const story = generateStory(type, wordsToUse);
        setGeneratedStory(story);
    };

    const startBatch = (index: number) => {
        const batch = batches[index];
        setSelectedBatch(batch);
        setSelectedBatchId(`cat-${decodedSlug}-day-${index + 1}`);
        setIsPlaying(true);
    };

    if (generatedStory) {
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

        const customLesson: DayLesson = {
            id: lessonId,
            dayNumber: 0,
            words: wordsToLearn,
            stories: []
        };
        return <LearningSession lesson={customLesson} onComplete={() => {
            setIsPlaying(false);
            setSelectedBatch(null);
        }} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6 max-w-7xl mx-auto">
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

                {/* Delete Button Area */}
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
            </div>

            {categoryWords.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-xl font-bold text-slate-400">No words found in this category.</p>
                </div>
            ) : isCourseMode ? (
                // COURSE MODE: Grid of Days
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {batches.map((batch, idx) => {
                        const dayNum = idx + 1;
                        const dayId = `cat-${decodedSlug}-day-${dayNum}`;
                        const isCompleted = isMounted ? completedDays.includes(dayId) : false;

                        return (
                            <div
                                key={idx}
                                onClick={() => startBatch(idx)}
                                className={`
                                    cursor-pointer p-6 rounded-3xl border-b-8 transition-transform hover:scale-105 active:scale-95
                                    ${isCompleted ? 'bg-emerald-400 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-800'}
                                `}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-black">Day {dayNum}</h3>
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
                                <div className="flex -space-x-2 mb-4 overflow-hidden h-10 w-full">
                                    {batch.slice(0, 5).map(w => (
                                        <div key={w.id} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs shadow-sm">
                                            {w.imageEmoji}
                                        </div>
                                    ))}
                                    {batch.length > 5 && (
                                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">
                                            +{batch.length - 5}
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
                    <div className="grid md:grid-cols-2 gap-6 mb-20">
                        {/* Stats Card */}
                        <div className="p-6 bg-violet-100 rounded-3xl flex items-center justify-between">
                            <div>
                                <h2 className="text-4xl font-black text-violet-600 mb-2">{categoryWords.length}</h2>
                                <p className="font-bold text-violet-400 uppercase tracking-widest">Words</p>
                            </div>
                            <div className="text-6xl">📚</div>
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

                    <div className="sticky bottom-6 mt-auto space-y-3 max-w-md mx-auto w-full">
                        <div className="grid grid-cols-2 gap-3">
                            <Button onClick={() => handleGenerateStory('fiction')} variant="secondary" className="text-lg">
                                🦄 Fiction
                            </Button>
                            <Button onClick={() => handleGenerateStory('non-fiction')} variant="accent" className="text-lg">
                                📜 Fact
                            </Button>
                        </div>
                        <Button onClick={() => setIsPlaying(true)} variant="primary" className="py-4 text-xl shadow-xl w-full">
                            <Play className="w-6 h-6 mr-2" />
                            Start Session
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
