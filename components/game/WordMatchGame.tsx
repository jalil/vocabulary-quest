'use client';

import { useState, useEffect } from 'react';
import { MOCK_WORDS } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Timer, Trophy, XCircle, RefreshCw, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

type GameItem = {
    id: string; // word ID
    type: 'word' | 'definition';
    content: string;
    status: 'idle' | 'selected' | 'matched' | 'wrong';
    uniqueId: string; // unique key for rendering
};

export function WordMatchGame() {
    const [gameState, setGameState] = useState<'intro' | 'playing' | 'won' | 'lost'>('intro');
    const [items, setItems] = useState<GameItem[]>([]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [selectedItems, setSelectedItems] = useState<GameItem[]>([]);
    const [matchesFound, setMatchesFound] = useState(0);

    // Timer Logic
    useEffect(() => {
        if (gameState !== 'playing') return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setGameState('lost');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState]);

    const startGame = () => {
        // 1. Pick 6 random words
        const gameWords = [...MOCK_WORDS]
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);

        // 2. Create items (words and definitions)
        const newItems: GameItem[] = [];
        gameWords.forEach(w => {
            newItems.push({
                id: w.id,
                type: 'word',
                content: w.word,
                status: 'idle',
                uniqueId: `${w.id}-word`
            });
            newItems.push({
                id: w.id,
                type: 'definition',
                content: w.definition,
                status: 'idle',
                uniqueId: `${w.id}-def`
            });
        });

        // 3. Shuffle items
        setItems(newItems.sort(() => 0.5 - Math.random()));
        setTimeLeft(60);
        setMatchesFound(0);
        setSelectedItems([]);
        setGameState('playing');
    };

    const handleItemClick = (item: GameItem) => {
        if (gameState !== 'playing' || item.status === 'matched' || item.status === 'wrong') return;

        // Don't allow clicking the same item twice
        if (selectedItems.find(i => i.uniqueId === item.uniqueId)) return;

        // If 2 items already selected, ignore click (waiting for reset)
        if (selectedItems.length >= 2) return;

        const newSelected = [...selectedItems, { ...item, status: 'selected' as const }];
        setSelectedItems(newSelected);

        // Update item status in main array
        setItems(prev => prev.map(i =>
            i.uniqueId === item.uniqueId ? { ...i, status: 'selected' } : i
        ));

        // Check Match
        if (newSelected.length === 2) {
            const [first, second] = newSelected;

            if (first.id === second.id && first.type !== second.type) {
                // MATCH!
                setTimeout(() => {
                    setItems(prev => prev.map(i =>
                        (i.id === first.id) ? { ...i, status: 'matched' } : i
                    ));
                    setSelectedItems([]);
                    setMatchesFound(prev => {
                        const newVal = prev + 1;
                        if (newVal >= 6) {
                            setGameState('won');
                            confetti();
                        }
                        return newVal;
                    });
                }, 300);
            } else {
                // WRONG!
                setTimeout(() => {
                    setItems(prev => prev.map(i =>
                        (i.uniqueId === first.uniqueId || i.uniqueId === second.uniqueId)
                            ? { ...i, status: 'wrong' }
                            : i
                    ));
                    // Penalty!
                    setTimeLeft(prev => Math.max(0, prev - 5));
                }, 300);

                setTimeout(() => {
                    setItems(prev => prev.map(i =>
                        (i.uniqueId === first.uniqueId || i.uniqueId === second.uniqueId)
                            ? { ...i, status: 'idle' }
                            : i
                    ));
                    setSelectedItems([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="min-h-screen bg-indigo-950 p-6 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-8xl opacity-10 animate-pulse">🧩</div>
                <div className="absolute bottom-20 right-20 text-9xl opacity-10 animate-bounce">⚡</div>
            </div>

            <div className="z-10 w-full max-w-4xl">
                {/* Header / HUD */}
                {gameState === 'playing' && (
                    <div className="flex justify-between items-center mb-8 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20">
                        <div className="flex items-center gap-3">
                            <Timer className={`w-8 h-8 ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`} />
                            <span className={`text-3xl font-black font-mono ${timeLeft < 10 ? 'text-red-500' : 'text-white'}`}>
                                {timeLeft}s
                            </span>
                        </div>
                        <div className="text-2xl font-black text-indigo-300">
                            {matchesFound}/6 Matches
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {gameState === 'intro' && (
                        <motion.div
                            key="intro"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            className="text-center bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg mx-auto"
                        >
                            <div className="text-8xl mb-6">⚡</div>
                            <h1 className="text-5xl font-black text-slate-800 mb-4">Speed Match</h1>
                            <p className="text-xl text-slate-500 mb-8 font-bold leading-relaxed">
                                Connect words to their definitions as fast as you can. Warning: Wrong matches cost time!
                            </p>
                            <Button onClick={startGame} className="w-full text-xl py-6 bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200">
                                Start Game (60s)
                            </Button>
                            <Link href="/" className="block mt-6">
                                <Button variant="outline" className="text-slate-400 font-bold">Back Home</Button>
                            </Link>
                        </motion.div>
                    )}

                    {gameState === 'playing' && (
                        <motion.div
                            key="game"
                            className="grid grid-cols-2 md:grid-cols-3 gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {items.map((item) => (
                                <motion.div
                                    key={item.uniqueId}
                                    layoutId={item.uniqueId}
                                    onClick={() => handleItemClick(item)}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: item.status === 'matched' ? 0 : 1,
                                        opacity: item.status === 'matched' ? 0 : 1,
                                        backgroundColor:
                                            item.status === 'selected' ? '#fbbf24' : // Amber
                                                item.status === 'wrong' ? '#ef4444' : // Red
                                                    '#ffffff' // White
                                    }}
                                    className={`
                                        p-6 rounded-2xl shadow-lg cursor-pointer flex items-center justify-center text-center min-h-[120px]
                                        border-b-8 transition-all active:scale-95 select-none
                                        ${item.status === 'selected' ? 'border-amber-600 text-white' :
                                            item.status === 'wrong' ? 'border-red-700 text-white' :
                                                'border-slate-200 hover:border-indigo-300 text-slate-700 bg-white'}
                                    `}
                                >
                                    <span className={`font-bold ${item.type === 'word' ? 'text-2xl' : 'text-sm'}`}>
                                        {item.content}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {gameState === 'won' && (
                        <motion.div
                            key="won"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg mx-auto"
                        >
                            <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-6" />
                            <h1 className="text-5xl font-black text-slate-800 mb-2">Awesome!</h1>
                            <p className="text-2xl text-slate-500 font-bold mb-8">
                                Finished with {timeLeft}s left!
                            </p>
                            <Button onClick={startGame} className="w-full text-xl py-6 bg-green-500 hover:bg-green-600 shadow-xl shadow-green-200">
                                Play Again
                            </Button>
                            <Link href="/">
                                <Button variant="outline" className="w-full mt-4 text-slate-400 font-bold">Exit</Button>
                            </Link>
                        </motion.div>
                    )}

                    {gameState === 'lost' && (
                        <motion.div
                            key="lost"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg mx-auto"
                        >
                            <XCircle className="w-32 h-32 text-red-400 mx-auto mb-6" />
                            <h1 className="text-5xl font-black text-slate-800 mb-2">Time's Up!</h1>
                            <p className="text-xl text-slate-500 font-bold mb-8">
                                Don't worry, speed comes with practice.
                            </p>
                            <Button onClick={startGame} className="w-full text-xl py-6 bg-slate-800 hover:bg-slate-900 shadow-xl">
                                Try Again
                            </Button>
                            <Link href="/">
                                <Button variant="outline" className="w-full mt-4 text-slate-400 font-bold">Exit</Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
