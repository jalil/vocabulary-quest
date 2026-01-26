'use client';

import { useState } from 'react';
import { Story } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export function StoryViewer({ story, onComplete }: { story: Story, onComplete: () => void }) {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [feedback, setFeedback] = useState<Record<string, 'correct' | 'wrong'>>({});

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

    const handleOptionClick = (questionId: string, option: string, correctAnswer: string) => {
        if (option === correctAnswer) {
            setFeedback(prev => ({ ...prev, [questionId]: 'correct' }));
            setSelectedAnswers(prev => ({ ...prev, [questionId]: option }));
            // Play success sound logic here if available
        } else {
            setFeedback(prev => ({ ...prev, [questionId]: 'wrong' }));
            setTimeout(() => {
                setFeedback(prev => {
                    const newFeedback = { ...prev };
                    delete newFeedback[questionId];
                    return newFeedback;
                });
            }, 800);
        }
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

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Intro Content */}
                <div className="text-xl leading-9 font-medium text-slate-700">
                    {story.content.split('\n\n').map((para, i) => (
                        <p key={i}>{renderContent(para)}</p>
                    ))}
                </div>

                {/* Questions Section */}
                {story.questions && (
                    <div className="space-y-8 mt-8">
                        {story.questions.map((q, idx) => (
                            <div key={q.id} className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 mb-4 flex gap-3 whitespace-pre-line">
                                    <span className="bg-amber-100 text-amber-700 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm">
                                        {idx + 1}
                                    </span>
                                    <span>
                                        {renderContent(q.question)}
                                    </span>
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {q.options.map((opt) => {
                                        const isSelected = selectedAnswers[q.id] === opt;
                                        const isCorrect = feedback[q.id] === 'correct' && isSelected;
                                        const isWrong = feedback[q.id] === 'wrong' && selectedAnswers[q.id] === undefined; // This logic is tricky with click handler, simplifying

                                        return (
                                            <Button
                                                key={opt}
                                                onClick={() => handleOptionClick(q.id, opt, q.correctAnswer)}
                                                disabled={feedback[q.id] === 'correct'}
                                                className={`
                                                    justify-start text-left h-auto py-3 px-4 text-base
                                                    ${feedback[q.id] === 'correct' && opt === q.correctAnswer
                                                        ? 'bg-green-500 hover:bg-green-600 text-white border-green-600'
                                                        : ''}
                                                `}
                                                variant={feedback[q.id] === 'correct' && opt === q.correctAnswer ? 'primary' : 'outline'}
                                            >
                                                {opt}
                                                {feedback[q.id] === 'correct' && opt === q.correctAnswer && <span className="ml-auto">✅</span>}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6 bg-slate-50 border-t-[6px] border-slate-200">
                <Button onClick={onComplete} variant="primary" className="text-xl py-6 w-full">
                    {story.questions ? 'Complete Exercise ✅' : 'I Finished Reading! 📖'}
                </Button>
            </div>
        </div>
    );
}
