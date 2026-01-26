'use client';

import { useUserStore } from '@/lib/store';
import { Flame, Star, Menu, BookOpen, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MOCK_WORDS } from '@/lib/data';

export function Navbar() {
    const { xp, streak, customWords, deletedCategories, logout } = useUserStore();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    // Calculate categories
    // Logic from page.tsx: combine mock + custom words -> unique categories
    const allWords = mounted ? [...MOCK_WORDS, ...customWords] : MOCK_WORDS;
    const allCategories = Array.from(new Set(allWords.map(w => w.category || 'General').filter(Boolean)));
    const categories = allCategories
        .filter(cat => !deletedCategories?.includes(cat))
        .sort((a, b) => {
            const gradeA = parseInt(a.replace(/\D/g, '')) || 0;
            const gradeB = parseInt(b.replace(/\D/g, '')) || 0;
            return gradeA - gradeB;
        });

    if (!mounted) return <div className="h-16 w-full bg-white shadow-sm md:hidden" />;

    return (
        <nav className="bg-white border-b-2 border-slate-100 shadow-sm sticky top-0 z-50 md:hidden">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo Area */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
                        <span className="text-3xl">🦉</span>
                        <span className="hidden md:block font-black text-xl text-slate-800 tracking-tight">Vocabulary Quest</span>
                    </Link>

                    {/* Desktop Categories */}
                    <div className="hidden md:flex items-center gap-2 overflow-x-auto hide-scrollbar max-w-xl">
                        {categories.map(cat => (
                            <Link key={cat} href={`/category/${cat}`}>
                                <div className="px-3 py-1.5 rounded-full hover:bg-violet-100 text-slate-600 font-bold text-sm transition-colors whitespace-nowrap">
                                    {cat}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side: Stats & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Stats */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
                            <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                            <span className="font-bold text-slate-700 text-sm">{streak}</span>
                        </div>

                        <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-bold text-slate-700 text-sm">{xp}</span>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
                        <Menu className="w-6 h-6 text-slate-700" />
                    </button>
                </div>
            </div>

            {/* Mobile Categories Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute w-full shadow-lg animate-in slide-in-from-top-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Categories</h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {categories.map(cat => (
                            <Link key={cat} href={`/category/${cat}`} onClick={() => setIsMenuOpen(false)}>
                                <div className="p-2 rounded-lg bg-slate-50 hover:bg-violet-50 text-slate-700 font-bold text-sm">
                                    {cat}
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                        <button
                            onClick={logout}
                            className="w-full flex items-center gap-2 p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-500 font-bold text-sm"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
