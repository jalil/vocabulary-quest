'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer, CheckCircle, AlertCircle, BookOpen, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import confetti from 'canvas-confetti';

const MITA_PROMPTS = [
    "Does technology make us more connected or more alone?",
    "Should students be required to learn a second language?",
    "Is it better to be a leader or a follower?",
    "Does money buy happiness?",
    "Should homework be banned?",
    "Is competition good for students?",
    "Should plastic bags be completely banned?",
    "Do video games cause violence?",
    "Is space exploration a waste of money?",
    "Should schools start later in the day?"
];

// PEEL Structure Helper
const PEEL_GUIDE = [
    { id: 'point', label: 'Point', desc: 'State your main point clearly.' },
    { id: 'evidence', label: 'Evidence', desc: 'Give an example or fact.' },
    { id: 'explain', label: 'Explanation', desc: 'Explain how the evidence supports your point.' },
    { id: 'link', label: 'Link', desc: 'Link back to the main topic.' }
];

export default function EssayWriter() {
    const [prompt, setPrompt] = useState('');
    const [content, setContent] = useState('');
    const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    // Checklist State
    const [checklist, setChecklist] = useState<Record<string, boolean>>({
        point: false,
        evidence: false,
        explain: false,
        link: false
    });

    useEffect(() => {
        // Random prompt on mount
        setPrompt(MITA_PROMPTS[Math.floor(Math.random() * MITA_PROMPTS.length)]);
    }, []);

    useEffect(() => {
        let interval: any;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsFinished(true);
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length;

    const handleFinish = () => {
        setIsActive(false);
        setIsFinished(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 font-sans flex flex-col items-center">

            {/* Header / Timer */}
            <div className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex justify-between items-center z-10 transition-colors ${timeLeft < 60 && isActive ? 'bg-red-50 border-red-200' : ''}`}>
                <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700">
                        <PenTool size={24} />
                    </div>
                    <span className="font-bold text-slate-700 hidden sm:block">Essay Power Writer</span>
                </div>

                <div className={`font-mono text-3xl font-black ${timeLeft < 120 ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}>
                    {formatTime(timeLeft)}
                </div>

                <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold ${wordCount < 150 ? 'text-orange-500' : 'text-green-600'}`}>
                        {wordCount} words
                    </span>
                    {!isFinished && (
                        <Button
                            variant={isActive ? 'secondary' : 'success'}
                            onClick={() => setIsActive(!isActive)}
                        >
                            {isActive ? 'Pause' : 'Start'}
                        </Button>
                    )}
                </div>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-8 mt-20 h-[calc(100vh-8rem)]">

                {/* Left: Prompt & Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Topic</h3>
                        <p className="text-xl font-bold text-indigo-900 leading-tight">
                            {prompt}
                        </p>
                        <Button variant="outline" className="mt-4 text-xs px-3 py-2 h-auto" onClick={() => setPrompt(MITA_PROMPTS[Math.floor(Math.random() * MITA_PROMPTS.length)])}>
                            New Topic
                        </Button>
                    </div>

                    <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <BookOpen size={100} />
                        </div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            KA Structure (PEEL)
                        </h3>
                        <div className="space-y-3 relative z-10">
                            {PEEL_GUIDE.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setChecklist(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3
                                        ${checklist[item.id]
                                            ? 'bg-green-500/20 border-green-400 text-green-100'
                                            : 'bg-white/10 border-white/20 hover:bg-white/20 text-indigo-100'
                                        }`}
                                >
                                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 
                                        ${checklist[item.id] ? 'bg-green-400 border-green-400' : 'border-indigo-300'}`}>
                                        {checklist[item.id] && <CheckCircle size={14} className="text-indigo-900" />}
                                    </div>
                                    <div>
                                        <span className="font-bold text-yellow-300 block mb-0.5">{item.label}</span>
                                        <span className="text-xs opacity-80 leading-snug block">{item.desc}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Center: Writing Area */}
                <div className="lg:col-span-3 flex flex-col h-full">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Start typing your essay here..."
                        disabled={isFinished}
                        className="flex-1 w-full bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 text-lg leading-relaxed text-slate-700 focus:border-indigo-500 focus:ring-0 outline-none resize-none font-serif transition-colors disabled:bg-slate-50 disabled:text-slate-500"
                        spellCheck={false}
                    />

                    {/* Footer Actions */}
                    <div className="mt-4 flex justify-end">
                        {!isFinished ? (
                            <Button onClick={handleFinish} className="px-8 py-4 text-lg shadow-xl shadow-indigo-200">
                                Submit Essay
                            </Button>
                        ) : (
                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => window.location.reload()}>Try Another</Button>
                                <Button className="bg-slate-800 text-white">Save to Dashboard</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay for finished state */}
            {isFinished && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md pointer-events-auto"
                    >
                        <div className="text-6xl mb-4">✍️</div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Pencils Down!</h2>
                        <p className="text-slate-500 mb-6">Great job finishing the essay.</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <span className="block text-slate-400 text-xs font-bold uppercase">Words</span>
                                <span className="block text-3xl font-black text-indigo-600">{wordCount}</span>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <span className="block text-slate-400 text-xs font-bold uppercase">Time</span>
                                <span className="block text-3xl font-black text-slate-700">{formatTime(20 * 60 - timeLeft)}</span>
                            </div>
                        </div>

                        <Button onClick={() => setIsFinished(false)} variant="outline" className="w-full">Review My Writing</Button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
