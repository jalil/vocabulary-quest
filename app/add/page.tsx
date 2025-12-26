'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function AddWordPage() {
    const router = useRouter();
    const { addCustomWord } = useUserStore();

    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [category, setCategory] = useState('');
    const [example, setExample] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!word || !definition || !example) return;

        addCustomWord({
            id: Date.now().toString(),
            word,
            pronunciation: 'Custom Word', // User can't enter IPA for now
            definition,
            exampleSentence: example,
            imageEmoji: '🌟', // Default emoji for now, or random picker later
            category: category || 'General'
        });

        router.push('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col p-6 max-w-md mx-auto relative">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/">
                    <Button variant="outline" className="w-12 h-12 p-0 rounded-full flex items-center justify-center">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <h1 className="text-2xl font-black text-slate-800">Add New Word</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-slate-400 tracking-wider">Word</label>
                    <input
                        className="w-full p-4 text-2xl font-bold rounded-2xl border-[3px] border-slate-200 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="e.g. Joyful"
                        value={word}
                        onChange={e => setWord(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-slate-400 tracking-wider">Definition</label>
                    <textarea
                        className="w-full p-4 text-lg font-medium rounded-2xl border-[3px] border-slate-200 focus:border-violet-500 focus:outline-none transition-colors"
                        rows={3}
                        placeholder="What does it mean?"
                        value={definition}
                        onChange={e => setDefinition(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-slate-400 tracking-wider">Category</label>
                    <input
                        className="w-full p-4 text-lg font-medium rounded-2xl border-[3px] border-slate-200 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="e.g. Science, Space, My List"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-slate-400 tracking-wider">Example Sentence</label>
                    <textarea
                        className="w-full p-4 text-lg font-medium rounded-2xl border-[3px] border-slate-200 focus:border-violet-500 focus:outline-none transition-colors"
                        rows={3}
                        placeholder="Use it in a sentence!"
                        value={example}
                        onChange={e => setExample(e.target.value)}
                    />
                </div>

                <Button type="submit" variant="primary" className="mt-4 py-4 text-xl">
                    <Save className="w-6 h-6" />
                    Save Word
                </Button>
            </form>
        </div>
    );
}
