'use client';

import { useUserStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Flame, Star, Trophy, Target } from 'lucide-react';

export function StatsDashboard() {
    const xp = useUserStore(state => state.xp);
    const streak = useUserStore(state => state.streak);
    const completedDays = useUserStore(state => state.completedDays.length);

    const stats = [
        {
            label: 'Day Streak',
            value: streak,
            icon: Flame,
            color: 'text-orange-500',
            bg: 'bg-orange-50',
            border: 'border-orange-200'
        },
        {
            label: 'Total XP',
            value: xp.toLocaleString(),
            icon: Star,
            color: 'text-yellow-500',
            bg: 'bg-yellow-50',
            border: 'border-yellow-200'
        },
        {
            label: 'Days Cleared',
            value: completedDays,
            icon: Target,
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            border: 'border-emerald-200'
        }
    ];

    return (
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        bg-white p-6 rounded-2xl border-b-4 flex items-center gap-4
                        shadow-sm ${stat.border}
                    `}
                >
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <stat.icon size={28} fill="currentColor" className="opacity-90" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                            {stat.label}
                        </p>
                        <p className="text-2xl font-black text-slate-700">
                            {stat.value}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div >
    );
}
