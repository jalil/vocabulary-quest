'use client';

import { useUserStore } from '@/lib/store';
import { Flame, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
    const { xp, streak } = useUserStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="h-16 w-full" />; // Hydration fix

    return (
        <header className="flex items-center justify-between p-4 px-6 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-slate-100 shadow-sm">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span className="font-bold text-slate-700">{streak}</span>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-slate-100 shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-slate-700">{xp}</span>
            </div>
        </header>
    );
}
