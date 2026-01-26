import { mita_lessons } from '@/lib/mita_data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle, BookOpen } from 'lucide-react';
import { Button } from './ui/Button';

interface KnowledgeBankProps {
    isOpen: boolean;
    onClose: () => void;
    completedDays: string[];
}

export function KnowledgeBank({ isOpen, onClose, completedDays }: KnowledgeBankProps) {
    // Group lessons by book title
    const books = Array.from(new Set(mita_lessons.map(l => l.bookTitle).filter(Boolean))) as string[];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[85vh] bg-slate-50 rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col border-4 border-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200 p-6 flex items-center justify-between sticky top-0 z-10">
                            <div className="flex items-center gap-4">
                                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-slate-800">Evidence Vault</h2>
                                    <p className="text-slate-500 font-bold">Mita Exam Prep • Essay Facts</p>
                                </div>
                            </div>
                            <Button variant="ghost" onClick={onClose} className="rounded-full w-12 h-12 p-0 hover:bg-slate-100">
                                <X className="w-6 h-6 text-slate-400" />
                            </Button>
                        </div>

                        {/* Content Scroll */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10">
                            {books.map(book => {
                                const bookLessons = mita_lessons.filter(l => l.bookTitle === book);

                                return (
                                    <div key={book} className="space-y-4">
                                        <h3 className="text-xl font-black text-slate-400 uppercase tracking-wider pl-2">{book}</h3>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            {bookLessons.map(lesson => {
                                                // Check if unlocked (Day 1 ID usually, checking against completedDays which holds full IDs)
                                                // Mita IDs in data match what the lesson block generates? 
                                                // In data.ts: id: "mita-1" etc.
                                                // Sidebar/Category page might prefix them? 
                                                // Logic in CategoryPage: `dayId = lesson.id`.
                                                // So we check if `lesson.id` is in `completedDays`.

                                                const isUnlocked = completedDays.includes(lesson.id);
                                                const hasEvidence = !!lesson.essayEvidence;

                                                if (!hasEvidence) return null;

                                                return (
                                                    <div
                                                        key={lesson.id}
                                                        className={`
                                                            relative p-6 rounded-2xl border-2 transition-all
                                                            ${isUnlocked
                                                                ? 'bg-white border-slate-200 shadow-sm'
                                                                : 'bg-slate-100 border-slate-200 opacity-60'
                                                            }
                                                        `}
                                                    >
                                                        {isUnlocked ? (
                                                            <>
                                                                <div className="flex items-start justify-between mb-4">
                                                                    <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                                        <CheckCircle className="w-3 h-3" />
                                                                        <span>Lesson {lesson.dayNumber}</span>
                                                                    </div>
                                                                    {lesson.theme && (
                                                                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                                                            {lesson.theme.split('&')[0]}
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                <p className="text-lg font-bold text-slate-700 leading-relaxed mb-4">
                                                                    "{lesson.essayEvidence?.fact}"
                                                                </p>

                                                                <div className="flex flex-wrap gap-2">
                                                                    {lesson.essayEvidence?.essayTopics.map(topic => (
                                                                        <span key={topic} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-md border border-indigo-100">
                                                                            #{topic}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                                                                <div className="bg-slate-200 p-3 rounded-full">
                                                                    <Lock className="w-6 h-6 text-slate-400" />
                                                                </div>
                                                                <p className="font-bold text-slate-400">Complete Lesson {lesson.dayNumber} to unlock</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
