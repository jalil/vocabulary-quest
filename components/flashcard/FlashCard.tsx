'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { VocabularyWord } from '@/lib/types';
import { cn } from '@/lib/utils';

export function FlashCard({ word }: { word: VocabularyWord }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-full h-[440px] cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className={cn(
                    "absolute inset-0 bg-white rounded-[3rem] border-b-[12px] border-slate-200 shadow-2xl flex flex-col items-center justify-center p-8 text-center",
                    // Backface visibility hidden
                )}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <span className="text-9xl mb-8 filter drop-shadow-md">{word.imageEmoji}</span>
                    <h2 className="text-5xl font-black text-slate-800 tracking-tight">{word.word}</h2>

                    <div className="absolute bottom-8 px-4 py-2 bg-slate-100 rounded-full text-slate-400 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                        <span>👆 Tap to Reveal</span>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-violet-500 rounded-[3rem] border-b-[12px] border-violet-700 shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <span className="text-sm font-bold uppercase tracking-widest text-violet-200 mb-4">Definition</span>
                        <h3 className="text-3xl font-black mb-8 leading-tight">{word.definition}</h3>

                        <span className="text-sm font-bold uppercase tracking-widest text-violet-200 mb-4">Example</span>
                        <div className="bg-white/20 p-6 rounded-3xl w-full">
                            <p className="text-xl font-medium italic">"{word.exampleSentence}"</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
