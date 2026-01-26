'use client';

import { useUserStore } from '@/lib/store';
import { ExerciseLog } from '@/lib/types';
import { motion } from 'framer-motion';
import { BarChart, Clock, AlertTriangle, User, Calendar, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
    const archivedUsers = useUserStore(state => state.archivedUsers);
    const currentUser = useUserStore(state => state.username);
    const exerciseHistory = useUserStore(state => state.exerciseHistory);
    // Merge current user history with archived for a full view if needed,
    // or just show list of users to select.

    const [selectedUser, setSelectedUser] = useState<string | null>(currentUser || Object.keys(archivedUsers)[0] || null);

    // Get data for selected user
    const userData = selectedUser === currentUser
        ? { ...useUserStore.getState(), exerciseHistory: exerciseHistory } // Prefer reactive history
        : archivedUsers[selectedUser || ''];

    const history = userData?.exerciseHistory || [];

    // Analytics
    const totalExercises = history.length;
    const avgScore = totalExercises > 0
        ? Math.round(history.reduce((acc, log) => acc + log.score, 0) / totalExercises)
        : 0;
    const avgDuration = totalExercises > 0
        ? Math.round(history.reduce((acc, log) => acc + log.durationSeconds, 0) / totalExercises)
        : 0;

    const totalQuestionsAnswered = history.reduce((acc, log) => acc + (log.totalQuestions || 0), 0);
    const avgTimePerQuestion = totalQuestionsAnswered > 0
        ? Math.round(history.reduce((acc, log) => acc + log.durationSeconds, 0) / totalQuestionsAnswered)
        : 0;

    const totalReadingSessions = history.filter(h => h.readingSpeedWpm).length;
    const avgReadingSpeed = totalReadingSessions > 0
        ? Math.round(history.reduce((acc, log) => acc + (log.readingSpeedWpm || 0), 0) / totalReadingSessions)
        : 0;

    // Identify "Difficult" Exercises (Score < 70% or Duration > 5 mins)
    const difficultExercises = history.filter(log => log.score < 70 || log.durationSeconds > 300);

    return (
        <div className="min-h-screen bg-slate-50 p-8 font-sans">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-slate-800 flex items-center gap-3">
                    <BarChart className="text-indigo-600" size={32} />
                    Admin Dashboard
                </h1>
                <p className="text-slate-500 font-medium">Track student progress and identify learning gaps.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar: User List */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-4 h-fit">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 ml-2">Students</h2>
                    <div className="flex flex-col gap-2">
                        {Object.keys(archivedUsers).concat(currentUser ? [currentUser] : [])
                            .filter((v, i, a) => a.indexOf(v) === i && v) // Unique
                            .map(username => (
                                <button
                                    key={username}
                                    onClick={() => setSelectedUser(username)}
                                    className={`flex items-center gap-3 p-3 rounded-xl text-left transition-all ${selectedUser === username
                                        ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm ring-1 ring-indigo-200'
                                        : 'hover:bg-slate-50 text-slate-600 font-medium'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedUser === username ? 'bg-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-400'}`}>
                                        <User size={16} />
                                    </div>
                                    {username}
                                </button>
                            ))}
                        {Object.keys(archivedUsers).length === 0 && !currentUser && (
                            <p className="text-slate-400 text-sm p-2 italic">No users found.</p>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    {selectedUser ? (
                        <>
                            {/* Key Stats Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <StatCard
                                    label="Total Exercises"
                                    value={totalExercises}
                                    icon={CheckCircle}
                                    color="text-green-600"
                                    bg="bg-green-50"
                                />
                                <StatCard
                                    label="Avg. Score"
                                    value={`${avgScore}%`}
                                    icon={BarChart}
                                    color="text-indigo-600"
                                    bg="bg-indigo-50"
                                />
                                <StatCard
                                    label="Weak Words"
                                    value={userData.weakWords?.length || 0}
                                    icon={AlertTriangle}
                                    color="text-red-500"
                                    bg="bg-red-50"
                                />
                                <StatCard
                                    label="Reading Speed"
                                    value={`${avgReadingSpeed} WPM`}
                                    icon={Clock}
                                    color={avgReadingSpeed >= 150 ? 'text-green-600' : 'text-orange-500'}
                                    bg={avgReadingSpeed >= 150 ? 'bg-green-50' : 'bg-orange-50'}
                                />
                            </div>

                            {/* Difficult Area Alert */}
                            {difficultExercises.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border border-red-100 rounded-2xl p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-full text-red-600">
                                            <AlertTriangle size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-red-800 font-bold text-lg mb-1">Needs Attention</h3>
                                            <p className="text-red-600 mb-4">
                                                This student struggled with <strong>{difficultExercises.length}</strong> exercises (low score or high duration).
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {difficultExercises.slice(0, 4).map(log => (
                                                    <div key={log.id} className="bg-white/80 p-3 rounded-lg border border-red-100 text-sm shadow-sm">
                                                        <span className="block font-bold text-red-700">{log.lessonTitle}</span>
                                                        <span className="text-slate-500 text-xs">
                                                            Score: <span className={log.score < 70 ? 'text-red-600 font-bold' : 'text-slate-600'}>{log.score}%</span> •
                                                            Time: <span className={log.durationSeconds > 300 ? 'text-red-600 font-bold' : 'text-slate-600'}>{formatDuration(log.durationSeconds)}</span>
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Recent Activity Table */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="p-6 border-b border-slate-100">
                                    <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                        <Calendar className="text-slate-400" size={20} />
                                        Activity Log
                                    </h3>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-slate-600">
                                        <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-400">
                                            <tr>
                                                <th className="px-6 py-4">Lesson</th>
                                                <th className="px-6 py-4">Date</th>
                                                <th className="px-6 py-4">Speed</th>
                                                <th className="px-6 py-4">Score</th>
                                                <th className="px-6 py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {history.slice().reverse().map(log => (
                                                <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="px-6 py-4 font-bold text-indigo-900">{log.lessonTitle}</td>
                                                    <td className="px-6 py-4">{new Date(log.timestamp).toLocaleDateString()}</td>
                                                    <td className="px-6 py-4 font-mono">
                                                        {log.readingSpeedWpm ? (
                                                            <span className={log.readingSpeedWpm >= 150 ? 'text-green-600 font-bold' : 'text-slate-500'}>
                                                                {log.readingSpeedWpm} WPM
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-300">-</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4 font-bold">
                                                        <span className={getScoreColor(log.score)}>{log.score}%</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {log.score >= 100 ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                Perfect
                                                            </span>
                                                        ) : log.score >= 70 ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                                Pass
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                                Struggle
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            {history.length === 0 && (
                                                <tr>
                                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">
                                                        No exercises completed yet.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-slate-400 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                            <User size={48} className="mb-4 opacity-20" />
                            <p className="font-medium">Select a student to view details.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, icon: Icon, color, bg }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-xl ${bg} ${color}`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-2xl font-black text-slate-800">{value}</p>
            </div>
        </div>
    );
}

function formatDuration(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}m ${sec}s`;
}

function getScoreColor(score: number) {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-indigo-600';
    return 'text-red-500';
}
