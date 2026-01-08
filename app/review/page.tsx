'use client';

import { useUserStore } from '@/lib/store';
import { MOCK_WORDS } from '@/lib/data';
import { ReviewSession } from '@/components/game/ReviewSession';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { VocabularyWord } from '@/lib/types';

export default function ReviewPage() {
    const srsProgress = useUserStore(state => state.srsProgress);
    const customWords = useUserStore(state => state.customWords);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Combine all words
    const allWords = [...MOCK_WORDS, ...customWords];

    // Filter due words
    const dueWords = allWords.filter(word => {
        const srs = srsProgress[word.id];
        // If no SRS data, it's not "due" (it's new, handled by lessons)
        // Only review words that have been learned at least once (have SRS data) and date is passed
        return srs && srs.nextReviewDate <= Date.now();
    });

    if (dueWords.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-6">
                <div className="text-9xl animate-bounce-short">🎉</div>
                <h1 className="text-4xl font-black text-slate-800">All Caught Up!</h1>
                <p className="text-xl text-slate-500 max-w-md">
                    You have no words due for review right now. Great job keeping your streak alive!
                </p>
                <Link href="/">
                    <Button variant="primary" className="text-lg px-8 py-4">
                        Return Home
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <ReviewSession words={dueWords} />
        </div>
    );
}
