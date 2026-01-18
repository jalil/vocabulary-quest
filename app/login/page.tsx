'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';

function LoginForm() {
    const [name, setName] = useState('');
    const { setUsername } = useUserStore();
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnUrl = searchParams.get('returnUrl');

    const [error, setError] = useState('');
    const ALLOWED_USERS = ['aio', 'umi', 'jalil'];

    const handleLogin = () => {
        const trimmedName = name.trim().toLowerCase();
        if (!trimmedName) return;

        // Bypassing guest list check to fix login issues
        // if (!ALLOWED_USERS.includes(trimmedName)) {
        //     setError('Access Denied: You are not on the guest list!');
        //     return;
        // }

        setUsername(trimmedName);
        const target = returnUrl ? decodeURIComponent(returnUrl) : '/';
        router.push(target);
    };

    return (
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border-b-8 border-slate-200 text-center space-y-8">

            {/* Logo & Welcome */}
            <div className="space-y-4">
                <div className="text-8xl animate-bounce-short">🦉</div>
                <h1 className="text-4xl font-black text-slate-800 tracking-tight">Welcome Hero!</h1>
                <p className="text-slate-500 font-bold text-lg">What should we call you?</p>
            </div>

            {/* Input Area */}
            <div className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError('');
                    }}
                    placeholder="Enter your name..."
                    className={`
                        w-full p-4 rounded-2xl bg-slate-100 border-4 text-xl font-bold text-slate-800 text-center outline-none transition-all placeholder:text-slate-300
                        ${error ? 'border-rose-400 bg-rose-50' : 'border-transparent focus:border-violet-400 focus:bg-white'}
                    `}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />

                {error && (
                    <p className="text-rose-500 font-bold animate-shake">{error}</p>
                )}

                <Button
                    onClick={handleLogin}
                    disabled={!name.trim()}
                    variant="primary"
                    className="w-full py-4 text-xl shadow-lg"
                >
                    Start Adventure
                </Button>
            </div>

            <p className="text-xs text-slate-300 font-bold uppercase tracking-widest">Vocabulary Quest</p>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <Suspense>
                <LoginForm />
            </Suspense>
        </div>
    );
}
