'use client';

import { useUserStore } from '@/lib/store';
import { Play, CheckCircle, Lock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const completedDays = useUserStore(state => state.completedDays);
  const username = useUserStore(state => state.username);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDay1Completed = isMounted ? completedDays.includes('day-1') : false;

  if (!isMounted || !username) return null;

  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="text-9xl mb-4 animate-bounce-short">🦉</div>
          <h1 className="text-6xl font-extrabold text-slate-800 text-stroke">Welcome, {username}!</h1>
          <p className="text-slate-600 font-bold mt-4 text-2xl">Ready to continue your quest?</p>
        </motion.div>
      </section>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 w-full">

        {/* Left Column: My Words */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-slate-800 uppercase tracking-wide">My Collection</h2>
          <div className="grid grid-cols-2 gap-6">
            <Link href="/add" className="transform transition-transform hover:scale-105 active:scale-95">
              <div className="bg-white border-b-8 border-slate-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 text-center h-full hover:border-violet-200 transition-colors">
                <span className="text-5xl">✍️</span>
                <span className="font-bold text-xl text-slate-700">Add Word</span>
              </div>
            </Link>

            <Link href="/learn/custom" className="transform transition-transform hover:scale-105 active:scale-95">
              <div className="bg-white border-b-8 border-slate-200 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 text-center h-full hover:border-violet-200 transition-colors">
                <span className="text-5xl">🧠</span>
                <span className="font-bold text-xl text-slate-700">Practice</span>
              </div>
            </Link>
          </div>

          {/* Boss Arena */}
          <Link href="/boss" className="block transform transition-transform hover:scale-[1.02] active:scale-95 mb-6">
            <div className="bg-rose-500 border-b-8 border-rose-700 p-8 rounded-3xl flex items-center justify-between text-white shadow-lg shadow-rose-200">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-rose-600/50">
                  <span className="text-4xl">⚔️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Boss Arena</h3>
                  <p className="font-bold text-lg text-rose-100">Review Weak Words</p>
                </div>
              </div>
              <div className="p-2 bg-white/20 rounded-full">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </div>
          </Link>

          {/* Mini-Games */}
          <Link href="/play/match" className="block transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-amber-400 border-b-8 border-amber-600 p-8 rounded-3xl flex items-center justify-between text-white shadow-lg shadow-amber-200">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-amber-500/50">
                  <span className="text-4xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Speed Match</h3>
                  <p className="font-bold text-lg text-amber-100">Race the Clock!</p>
                </div>
              </div>
              <div className="p-2 bg-white/20 rounded-full">
                <Play className="w-8 h-8 fill-white" />
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column: Daily Adventure */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-slate-800 uppercase tracking-wide">Daily Path</h2>
          <div className="space-y-6">
            <Link href="/learn/day-1" className="block transform transition-transform hover:scale-[1.02] active:scale-95">
              <div className={`
                        p-8 rounded-3xl border-b-8 flex items-center justify-between
                        ${isDay1Completed ? 'bg-emerald-400 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-800'}
                    `}>
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-2xl ${isDay1Completed ? 'bg-white/20' : 'bg-violet-100'}`}>
                    <span className="text-4xl">🗺️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Day 1</h3>
                    <p className={`font-bold text-lg ${isDay1Completed ? 'text-white/90' : 'text-slate-400'}`}>
                      {isDay1Completed ? 'Completed!' : 'The Adventure Begins'}
                    </p>
                  </div>
                </div>
                {isDay1Completed ? <CheckCircle className="w-10 h-10" /> : <Play className="w-10 h-10 fill-slate-800" />}
              </div>
            </Link>

            {/* Locked Day 2 */}
            <div className="opacity-60 grayscale cursor-not-allowed">
              <div className="p-8 rounded-3xl bg-white border-b-8 border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-slate-100">
                    <Lock className="w-10 h-10 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-400">Day 2</h3>
                    <p className="font-bold text-lg text-slate-400">Locked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
