'use client';

import { useUserStore } from '@/lib/store';
import { LearningSession } from '@/components/game/LearningSession';
import { DayLesson } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function CustomLearningPage() {
    const { customWords } = useUserStore();

    if (customWords.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center gap-6">
                <div className="text-8xl">🕸️</div>
                <h1 className="text-3xl font-black text-slate-800">No words yet!</h1>
                <p className="text-xl text-slate-500 font-bold">
                    Add some words to start your own adventure.
                </p>
                <Link href="/add">
                    <Button variant="primary">Add a Word</Button>
                </Link>
                <Link href="/">
                    <Button variant="outline">Back Home</Button>
                </Link>
            </div>
        );
    }

    const customLesson: DayLesson = {
        id: "custom-session",
        dayNumber: 0,
        words: customWords,
        stories: [] // No auto-generated stories for custom words yet
    };

    return <LearningSession lesson={customLesson} />;
}
