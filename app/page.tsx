'use client';

import { useUserStore } from '@/lib/store';
import { KAAT_LESSONS } from '@/lib/data';
import { StatsDashboard } from '@/components/dashboard/StatsDashboard';
import { Play, CheckCircle, Lock, Brain } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const completedDays = useUserStore(state => state.completedDays);
  const username = useUserStore(state => state.username);
  const srsProgress = useUserStore(state => state.srsProgress);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDay1Completed = isMounted ? completedDays.includes('day-1') : false;

  // Calculate Due Words
  const dueCount = isMounted ? Object.values(srsProgress || {}).filter(item => item.nextReviewDate <= Date.now()).length : 0;

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

      {/* Stats Dashboard */}
      <div className="mb-8">
        <StatsDashboard />
      </div>

      {/* SRS Review Card */}
      {isMounted && (
        <div className="max-w-3xl mx-auto w-full mb-8">
          <Link href={dueCount > 0 ? "/review" : "#"}>
            <motion.div
              whileHover={dueCount > 0 ? { scale: 1.02 } : {}}
              whileTap={dueCount > 0 ? { scale: 0.98 } : {}}
              className={`
                        p-6 rounded-3xl border-b-8 flex items-center justify-between shadow-lg transition-colors
                        ${dueCount > 0
                  ? 'bg-indigo-500 border-indigo-700 text-white cursor-pointer hover:bg-indigo-400'
                  : 'bg-slate-100 border-slate-200 text-slate-400 cursor-default'}
                    `}
            >
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${dueCount > 0 ? 'bg-indigo-400/50' : 'bg-slate-200'}`}>
                  <Brain size={40} className={dueCount > 0 ? 'text-white' : 'text-slate-500'} />
                </div>
                <div>
                  <h3 className="text-2xl font-black">{dueCount > 0 ? 'Daily Review' : 'All Caught Up!'}</h3>
                  <p className={`font-bold ${dueCount > 0 ? 'text-indigo-100' : 'text-slate-400'}`}>
                    {dueCount > 0 ? `${dueCount} words due for review` : 'No words due right now'}
                  </p>
                </div>
              </div>
              {dueCount > 0 && (
                <div className="bg-white/20 p-3 rounded-full">
                  <Play className="w-8 h-8 fill-white" />
                </div>
              )}
            </motion.div>
          </Link>
        </div>
      )}


      {/* Main Content */}
      <div className="max-w-3xl mx-auto w-full space-y-8 pb-20">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Add Word - Spans Full Width */}
          <Link href="/add" className="md:col-span-2 transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-white border-b-8 border-slate-200 p-8 rounded-3xl flex items-center justify-between shadow-sm hover:border-violet-200 transition-colors group">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-slate-100 group-hover:bg-violet-100 transition-colors">
                  <span className="text-4xl">✍️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-700">Add New Word</h3>
                  <p className="font-bold text-slate-400">Expand your collection</p>
                </div>
              </div>
              <div className="p-2 bg-slate-50 rounded-full group-hover:bg-violet-50">
                <Play className="w-8 h-8 fill-slate-300 group-hover:fill-violet-400 transition-colors" />
              </div>
            </div>
          </Link>

          {/* Boss Arena */}
          <Link href="/boss" className="transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-rose-500 border-b-8 border-rose-700 p-8 rounded-3xl flex flex-col items-center text-center gap-4 text-white shadow-lg shadow-rose-200 h-full justify-center">
              <div className="p-4 rounded-2xl bg-rose-600/50">
                <span className="text-5xl">⚔️</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Boss Arena</h3>
                <p className="font-bold text-rose-100">Review Weak Words</p>
              </div>
            </div>
          </Link>

          {/* Mini-Games */}
          <Link href="/play/match" className="transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-amber-400 border-b-8 border-amber-600 p-8 rounded-3xl flex flex-col items-center text-center gap-4 text-white shadow-lg shadow-amber-200 h-full justify-center">
              <div className="p-4 rounded-2xl bg-amber-500/50">
                <span className="text-5xl">⚡</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Speed Match</h3>
                <p className="font-bold text-amber-100">Race the Clock!</p>
              </div>
            </div>
          </Link>

          {/* Sentence Builder */}
          <Link href="/play/sentence" className="transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-cyan-400 border-b-8 border-cyan-600 p-8 rounded-3xl flex flex-col items-center text-center gap-4 text-white shadow-lg shadow-cyan-200 h-full justify-center">
              <div className="p-4 rounded-2xl bg-cyan-500/50">
                <span className="text-5xl">🧩</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Builder</h3>
                <p className="font-bold text-cyan-100">Fix Sentences</p>
              </div>
            </div>
          </Link>

          {/* Word Detective */}
          <Link href="/play/detective" className="transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-slate-700 border-b-8 border-slate-900 p-8 rounded-3xl flex flex-col items-center text-center gap-4 text-white shadow-lg shadow-slate-400 h-full justify-center">
              <div className="p-4 rounded-2xl bg-slate-600">
                <span className="text-5xl">🕵️‍♂️</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Detective</h3>
                <p className="font-bold text-slate-400">Context Clues</p>
              </div>
            </div>
          </Link>

          {/* Listening Practice */}
          <Link href="/play/listening" className="transform transition-transform hover:scale-[1.02] active:scale-95">
            <div className="bg-fuchsia-500 border-b-8 border-fuchsia-700 p-8 rounded-3xl flex flex-col items-center text-center gap-4 text-white shadow-lg shadow-fuchsia-300 h-full justify-center">
              <div className="p-4 rounded-2xl bg-fuchsia-600">
                <span className="text-5xl">🎧</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">Listening</h3>
                <p className="font-bold text-fuchsia-200">Exam Prep</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
