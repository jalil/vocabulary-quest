'use client';

import { Story } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export function StoryViewer({ story, onComplete }: { story: Story, onComplete: () => void }) {
    // Simple markdown bold parser
    const renderContent = (content: string) => {
        const parts = content.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <span key={i} className="text-violet-600 font-black bg-violet-100 px-1.5 py-0.5 rounded-lg mx-0.5 decoration-2 underline decoration-violet-300 underline-offset-4">
                        {part.slice(2, -2)}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-[6px] border-slate-100">
            <div className="bg-amber-400 p-8 text-white text-center border-b-[6px] border-amber-500 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-white/20 rounded-full" />
                <div className="absolute bottom-[-10px] right-[-10px] w-16 h-16 bg-white/20 rounded-full" />

                <div className="relative z-10">
                    <div className="inline-block bg-black/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                        {story.type}
                    </div>
                    <h2 className="text-3xl font-black leading-tight">{story.title}</h2>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6 text-xl leading-9 font-medium text-slate-700">
                {story.content.split('\n\n').map((para, i) => (
                    <p key={i}>{renderContent(para)}</p>
                ))}
            </div>

            <div className="p-6 bg-slate-50 border-t-[6px] border-slate-200">
                <Button onClick={onComplete} variant="primary" className="text-xl py-6">
                    I Finished Reading! 📖
                </Button>
            </div>
        </div>
    );
}
