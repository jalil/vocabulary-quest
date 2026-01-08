'use client';

import { useState, useEffect } from 'react';
import { MOCK_WORDS } from '@/lib/data';
import { useUserStore } from '@/lib/store';
import { WordDetectiveStep } from '@/components/game/WordDetectiveStep';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DetectiveGame() {
    const customWords = useUserStore(state => state.customWords);
    const [queue, setQueue] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Combine all words
        const allWords = [...MOCK_WORDS, ...customWords];
        const validWords = allWords.filter(w => w.exampleSentence && w.exampleSentence.length > 10);

        // Pick 10 random cases
        const shuffled = validWords.sort(() => 0.5 - Math.random()).slice(0, 10);
        setQueue(shuffled);
    }, []);

    if (!isMounted) return null;

    if (queue.length === 0) return <div>Loading Cases...</div>;

    if (currentIndex >= queue.length) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center space-y-6">
                <div className="text-9xl animate-bounce-short">🕵️‍♂️</div>
                <h1 className="text-4xl font-black text-slate-800">Case Closed!</h1>
                <p className="text-xl text-slate-500">You solved {queue.length} mysteries.</p>
                <Link href="/">
                    <Button variant="primary" className="text-lg px-8 py-4">Return to HQ</Button>
                </Link>
            </div>
        );
    }

    const currentWord = queue[currentIndex];
    // Generate distractors
    const allWords = [...MOCK_WORDS, ...customWords];
    const distractors = allWords
        .filter(w => w.id !== currentWord.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6">
            <div className="mb-8">
                <Link href="/">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Exit Case
                    </Button>
                </Link>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <WordDetectiveStep
                    key={currentWord.id}
                    targetWord={currentWord}
                    distractors={distractors}
                    onComplete={() => setCurrentIndex(prev => prev + 1)}
                />
            </div>

            <div className="text-center mt-8 text-slate-400 font-bold text-sm uppercase tracking-widest">
                Case {currentIndex + 1} of {queue.length}
            </div>
        </div>
    );
}
