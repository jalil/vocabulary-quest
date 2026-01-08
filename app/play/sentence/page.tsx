'use client';

import { useState, useEffect } from 'react';
import { MOCK_WORDS } from '@/lib/data';
import { useUserStore } from '@/lib/store';
import { SentenceBuilderStep } from '@/components/game/SentenceBuilderStep';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SentenceBuilderGame() {
    const customWords = useUserStore(state => state.customWords);
    const [queue, setQueue] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Combine and shuffle, filtering for sentences with at least 5 words for better gameplay
        const allWords = [...MOCK_WORDS, ...customWords].filter(w =>
            w.exampleSentence && w.exampleSentence.split(' ').length >= 5
        );

        // Random 5 words for a quick session
        const shuffled = allWords.sort(() => 0.5 - Math.random()).slice(0, 5);
        setQueue(shuffled);
    }, []);

    if (!isMounted) return null;

    if (queue.length === 0) return <div>Loading...</div>;

    if (currentIndex >= queue.length) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-6">
                <div className="text-9xl animate-bounce-short">🧩</div>
                <h1 className="text-4xl font-black text-slate-800">Sentence Master!</h1>
                <p className="text-xl text-slate-500">You built {queue.length} sentences.</p>
                <Link href="/">
                    <Button variant="primary" className="text-lg px-8 py-4">Return Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6">
            <div className="mb-8">
                <Link href="/">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <SentenceBuilderStep
                    key={queue[currentIndex].id}
                    targetWord={queue[currentIndex]}
                    onComplete={() => setCurrentIndex(prev => prev + 1)}
                />
            </div>

            <div className="text-center mt-8 text-slate-400 font-bold text-sm uppercase tracking-widest">
                Sentence {currentIndex + 1} of {queue.length}
            </div>
        </div>
    );
}
