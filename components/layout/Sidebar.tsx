'use client';

import { useUserStore } from '@/lib/store';
import { Flame, Star, Home, PlusCircle, BookOpen, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MOCK_WORDS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Sidebar() {
    const { xp, streak, customWords, deletedCategories, logout, username } = useUserStore();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => setMounted(true), []);

    const allWords = mounted ? [...MOCK_WORDS, ...customWords] : MOCK_WORDS;
    const allCategories = Array.from(new Set(allWords.map(w => w.category || 'General').filter(Boolean)));
    let categories = allCategories.filter(cat => !deletedCategories?.includes(cat));

    // Special filter for 'umi'
    if (username === 'umi') {
        const UMI_ALLOWED = ['Grade 4', 'Grade 5', 'Idioms'];
        categories = categories.filter(cat => UMI_ALLOWED.includes(cat));
    }

    if (!mounted) return <div className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col" />;

    return (
        <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col sticky top-0 h-screen overflow-y-auto">
            <div className="p-6 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <span className="text-4xl">🦉</span>
                    <span className="font-black text-xl text-slate-800 tracking-tight leading-tight">Vocabulary<br />Quest</span>
                </Link>
            </div>

            <div className="p-4 space-y-2">
                <Link href="/">
                    <div className={cn("flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors",
                        pathname === '/' ? "bg-violet-100 text-violet-700" : "text-slate-600 hover:bg-slate-50")}>
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                    </div>
                </Link>
                <Link href="/search">
                    <div className={cn("flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors",
                        pathname === '/search' ? "bg-violet-100 text-violet-700" : "text-slate-600 hover:bg-slate-50")}>
                        <div className="w-5 h-5 flex items-center justify-center">
                            <span className="text-lg">🔍</span>
                        </div>
                        <span>Search</span>
                    </div>
                </Link>
                <Link href="/add">
                    <div className={cn("flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors",
                        pathname === '/add' ? "bg-violet-100 text-violet-700" : "text-slate-600 hover:bg-slate-50")}>
                        <PlusCircle className="w-5 h-5" />
                        <span>Add Word</span>
                    </div>
                </Link>
            </div>

            <div className="px-6 py-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
                <div className="space-y-1">
                    {categories.map(cat => {
                        const encodedCat = encodeURIComponent(cat);
                        const isActive = pathname === `/category/${encodedCat}`;
                        return (
                            <Link key={cat} href={`/category/${encodedCat}`}>
                                <div className={cn("flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold transition-colors",
                                    isActive ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700")}>
                                    <span>{cat}</span>
                                    {isActive && <div className="w-2 h-2 rounded-full bg-violet-500" />}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors text-slate-500 hover:bg-red-50 hover:text-red-500 mb-2"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>

                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                        <span className="font-bold text-slate-700">Streak</span>
                    </div>
                    <span className="font-black text-orange-600">{streak}</span>
                </div>

                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-slate-700">XP</span>
                    </div>
                    <span className="font-black text-yellow-600">{xp}</span>
                </div>
            </div>
        </aside>
    );
}
