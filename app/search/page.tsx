'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen, Hash } from 'lucide-react';
import { MOCK_WORDS } from '@/lib/data';
import { useUserStore } from '@/lib/store';
import { VocabularyWord } from '@/lib/types';

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const { customWords } = useUserStore();

    const allWords = useMemo(() => {
        return [...MOCK_WORDS, ...customWords];
    }, [customWords]);

    const filteredWords = useMemo(() => {
        if (!query.trim()) return [];

        const lowerQuery = query.toLowerCase().trim();
        return allWords.filter(word =>
            word.word.toLowerCase().includes(lowerQuery) ||
            word.definition.toLowerCase().includes(lowerQuery) ||
            word.synonyms?.some(s => s.toLowerCase().includes(lowerQuery)) ||
            word.antonyms?.some(a => a.toLowerCase().includes(lowerQuery))
        );
    }, [query, allWords]);

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-black text-slate-800">Word Search</h1>
                <p className="text-xl text-slate-500 font-medium">Find definitions, synonyms, and more!</p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a word..."
                    className="w-full pl-14 pr-6 py-4 text-xl font-bold text-slate-700 bg-white border-4 border-slate-200 rounded-3xl focus:border-violet-400 focus:outline-none transition-colors shadow-sm placeholder:text-slate-300"
                    autoFocus
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 text-slate-400" />
            </div>

            {/* Results */}
            <div className="space-y-6">
                {query.trim() === '' ? (
                    <div className="text-center py-20 text-slate-400 space-y-4">
                        <Search className="w-20 h-20 mx-auto opacity-20" />
                        <p className="font-bold text-lg">Type something to start searching</p>
                    </div>
                ) : filteredWords.length === 0 ? (
                    <div className="text-center py-20 text-slate-400 space-y-4">
                        <div className="text-6xl mb-4">🤔</div>
                        <p className="font-bold text-lg">No words found for "{query}"</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {filteredWords.map((word) => (
                            <WordResultCard key={word.id} word={word} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function WordResultCard({ word }: { word: VocabularyWord }) {
    return (
        <div className="bg-white border-b-4 border-slate-200 rounded-2xl p-6 hover:border-violet-200 transition-all shadow-sm">
            <div className="flex items-start gap-4">
                {/* Emoji / Icon */}
                <div className="text-4xl bg-slate-50 p-4 rounded-xl shrink-0">
                    {word.imageEmoji || '📖'}
                </div>

                <div className="space-y-3 flex-1">
                    {/* Header: Word & Category */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-slate-800">{word.word}</h3>
                            {word.pronunciation && (
                                <p className="text-slate-400 font-mono text-sm">{word.pronunciation}</p>
                            )}
                        </div>
                        {word.category && (
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-sm font-bold">
                                {word.category}
                            </span>
                        )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        {/* Definition */}
                        <p className="text-slate-600 font-medium text-lg border-l-4 border-violet-200 pl-3">
                            {word.definition}
                        </p>

                        {/* Sentence */}
                        <div className="bg-slate-50 p-3 rounded-lg text-slate-600 italic">
                            "{word.exampleSentence}"
                        </div>

                        {/* Synonyms & Antonyms */}
                        {(word.synonyms?.length || 0) + (word.antonyms?.length || 0) > 0 && (
                            <div className="flex flex-wrap gap-4 pt-2">
                                {word.synonyms && word.synonyms.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-green-500 uppercase tracking-wider">Synonyms:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {word.synonyms.map(syn => (
                                                <span key={syn} className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-sm font-semibold">
                                                    {syn}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {word.antonyms && word.antonyms.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Antonyms:</span>
                                        <div className="flex flex-wrap gap-1">
                                            {word.antonyms.map(ant => (
                                                <span key={ant} className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded text-sm font-semibold">
                                                    {ant}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
