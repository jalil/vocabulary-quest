'use client';

import { useState, useEffect } from 'react';
import { useUserStore } from '@/lib/store';
import { MOCK_WORDS } from '@/lib/data';
import { VocabularyWord } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Heart, Sword, Shield, Skull, Trophy, X, Medal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizStep } from './QuizStep';
import Link from 'next/link';
import { getBossQuestionsForBook, BossCheckpoint } from '@/lib/boss_logic';
import { cn } from '@/lib/utils';

export function BossBattle() {
    const { weakWords, markWordAsMastered, addXp, level, addBadge } = useUserStore();
    const [gameState, setGameState] = useState<'intro' | 'battle' | 'victory' | 'defeat'>('intro');
    const [battleWords, setBattleWords] = useState<VocabularyWord[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userHp, setUserHp] = useState(100);
    const [bossHp, setBossHp] = useState(100);
    const [attackAnim, setAttackAnim] = useState<'none' | 'user' | 'boss'>('none');
    const [combo, setCombo] = useState(0);

    // Checkpoint Data
    const [checkpoint, setCheckpoint] = useState<BossCheckpoint | null>(null);

    // Setup Battle
    useEffect(() => {
        // Check for Book Mastery Checkpoint first
        const cp = getBossQuestionsForBook(level);

        if (cp.isCheckpoint) {
            setCheckpoint(cp);
            // Use words from the book, prioritize domain words?
            // For now just shuffle the book words.
            // If fewer than 5 words exists (unlikely in real usage but possible in test), we might need padding?
            // Assuming at least 5 words exist in a book's lessons.
            setBattleWords(cp.words.sort(() => 0.5 - Math.random()));
        } else {
            // Standard Boss Logic (Random Weak Words)
            setCheckpoint(null);
            const weakObjects = MOCK_WORDS.filter(w => weakWords.includes(w.id));
            let pool = [...weakObjects];
            if (pool.length < 5) {
                const others = MOCK_WORDS.filter(w => !weakWords.includes(w.id))
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 5 - pool.length);
                pool = [...pool, ...others];
            }
            setBattleWords(pool.sort(() => 0.5 - Math.random()));
        }
    }, [weakWords, level]);

    const handleTurnComplete = (success: boolean) => {
        if (success) {
            const newCombo = combo + 1;
            setCombo(newCombo);
            setAttackAnim('user');

            const baseDamage = 100 / battleWords.length;
            const multiplier = 1 + (newCombo * 0.1);
            const damage = baseDamage * multiplier;

            setBossHp(prev => Math.max(0, prev - damage));

            const currentWord = battleWords[currentWordIndex];
            if (weakWords.includes(currentWord.id)) {
                markWordAsMastered(currentWord.id);
            }

            if (bossHp <= damage) {
                setTimeout(() => {
                    setGameState('victory');
                    if (checkpoint?.isCheckpoint && checkpoint.badgeName) {
                        addBadge(checkpoint.badgeName);
                    }
                }, 1000);
                confetti();
                addXp(200 + (newCombo * 10));
            }
        } else {
            setCombo(0);
            setAttackAnim('boss');
            setUserHp(prev => Math.max(0, prev - 25));

            if (userHp <= 25) {
                setTimeout(() => setGameState('defeat'), 1000);
            }
        }

        setTimeout(() => {
            setAttackAnim('none');
            if (gameState === 'battle') {
                if (currentWordIndex < battleWords.length - 1) {
                    setCurrentWordIndex(prev => prev + 1);
                } else {
                    if (bossHp > 0) {
                        setGameState('victory');
                        addXp(100);
                        if (checkpoint?.isCheckpoint && checkpoint.badgeName) {
                            addBadge(checkpoint.badgeName);
                        }
                    }
                }
            }
        }, 1000);
    };

    return (
        <div className={cn("min-h-screen text-white p-6 flex flex-col items-center relative overflow-hidden",
            checkpoint?.isCheckpoint ? "bg-indigo-950" : "bg-slate-900")}>

            {/* Background Effects */}
            <div className={cn("absolute inset-0 opacity-50 z-0",
                checkpoint?.isCheckpoint
                    ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black"
                    : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black"
            )} />

            <div className="z-10 w-full max-w-md flex flex-col h-full">

                {/* Top Bar / Exit */}
                <div className="w-full flex justify-end mb-4">
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full w-10 h-10 p-0">
                            <X className="w-6 h-6" />
                        </Button>
                    </Link>
                </div>

                {/* HUD */}
                <div className="flex justify-between items-center mb-8 bg-slate-800/80 p-4 rounded-xl border border-slate-700 relative">
                    <AnimatePresence>
                        {combo > 1 && (
                            <motion.div
                                key={combo}
                                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                                animate={{ scale: 1.5, rotate: -5, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap pointer-events-none"
                            >
                                <div className="text-5xl font-black text-yellow-400 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)] text-stroke italic">
                                    {combo}x COMBO!
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex flex-col items-center">
                        <div className="text-sm font-bold text-slate-400 mb-1">YOU</div>
                        <div className="flex items-center gap-2">
                            <Heart className="text-red-500 fill-red-500" />
                            <div className="w-24 h-4 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-green-500"
                                    animate={{ width: `${userHp}%` }}
                                    transition={{ type: 'spring' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-black text-rose-500">VS</div>
                    <div className="flex flex-col items-center">
                        <div className="text-sm font-bold text-slate-400 mb-1">
                            {checkpoint?.isCheckpoint ? "BOOK BOSS" : "BOSS"}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-24 h-4 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-red-600"
                                    animate={{ width: `${bossHp}%` }}
                                    transition={{ type: 'spring' }}
                                />
                            </div>
                            <Skull className="text-purple-400 fill-purple-400" />
                        </div>
                    </div>
                </div>

                {/* Main Stage */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                    <AnimatePresence mode="wait">
                        {gameState === 'intro' && (
                            <motion.div
                                key="intro"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.2, opacity: 0 }}
                                className="text-center space-y-6"
                            >
                                <div className="text-9xl animate-pulse">
                                    {checkpoint?.isCheckpoint ? '📚' : '👹'}
                                </div>

                                <div>
                                    <h1 className="text-3xl font-black text-rose-500 uppercase leading-tight">
                                        {checkpoint?.isCheckpoint ? `Book Mastery:\n${checkpoint.bookTitle}` : 'Boss Battle'}
                                    </h1>
                                    {checkpoint?.isCheckpoint && (
                                        <p className="text-indigo-400 font-bold mt-2">
                                            Theme: {checkpoint.theme}
                                        </p>
                                    )}
                                </div>

                                <p className="text-slate-400 text-lg">
                                    {checkpoint?.isCheckpoint
                                        ? "Prove you mastered this book to earn the Badge!"
                                        : "The Grammar Goblin blocks your path!\nDefeat him to master your weak words."
                                    }
                                </p>
                                <Button
                                    className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xl py-6"
                                    onClick={() => setGameState('battle')}
                                >
                                    FIGHT! ⚔️
                                </Button>
                            </motion.div>
                        )}

                        {gameState === 'battle' && battleWords.length > 0 && (
                            <motion.div
                                key="battle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full"
                            >
                                <motion.div
                                    className="text-9xl text-center mb-8"
                                    animate={attackAnim === 'user' ? { x: [0, 10, -10, 10, -10, 0], color: '#ef4444' } : { y: [0, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {attackAnim === 'user' ? '💥' : (checkpoint?.isCheckpoint ? '📚' : '👹')}
                                </motion.div>

                                <div className="bg-slate-100 rounded-[2rem] p-2">
                                    <QuizStep
                                        targetWord={battleWords[currentWordIndex]}
                                        allWords={MOCK_WORDS}
                                        onComplete={() => handleTurnComplete(true)}
                                        onWrong={() => handleTurnComplete(false)}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {gameState === 'victory' && (
                            <motion.div
                                key="victory"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center space-y-6"
                            >
                                <Trophy className="w-32 h-32 text-yellow-400 mx-auto" />
                                <h1 className="text-4xl font-black text-yellow-400">VICTORY!</h1>

                                {checkpoint?.isCheckpoint && checkpoint.badgeName && (
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="bg-slate-800 p-4 rounded-xl border border-yellow-500/50"
                                    >
                                        <div className="flex items-center justify-center gap-3 text-yellow-500 mb-2">
                                            <Medal className="w-6 h-6" />
                                            <span className="font-bold uppercase tracking-widest">Badge Unlocked</span>
                                        </div>
                                        <div className="text-2xl font-black text-white">
                                            "{checkpoint.badgeName}"
                                        </div>
                                    </motion.div>
                                )}

                                <p className="text-slate-400 text-lg">
                                    You earned 200 XP!
                                </p>
                                <Link href="/">
                                    <Button className="w-full bg-green-600 hover:bg-green-700 py-4 mt-8">
                                        Return Home
                                    </Button>
                                </Link>
                            </motion.div>
                        )}

                        {gameState === 'defeat' && (
                            <motion.div
                                key="defeat"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center space-y-6"
                            >
                                <Skull className="w-32 h-32 text-slate-600 mx-auto" />
                                <h1 className="text-4xl font-black text-slate-500">DEFEAT...</h1>
                                <p className="text-slate-400 text-lg">
                                    The Boss was too strong this time.
                                </p>
                                <Button
                                    className="w-full bg-slate-700 hover:bg-slate-600 py-4 mt-8"
                                    onClick={() => {
                                        setUserHp(100);
                                        setBossHp(100);
                                        setCurrentWordIndex(0);
                                        setCombo(0);
                                        setGameState('battle');
                                    }}
                                >
                                    Try Again
                                </Button>
                                <Link href="/">
                                    <Button variant="outline" className="w-full mt-4 border-slate-700 text-slate-400">
                                        Retreat
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// End of file

