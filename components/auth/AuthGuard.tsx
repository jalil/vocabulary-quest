'use client';

import { useUserStore } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const { username } = useUserStore();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !username && pathname !== '/login') {
            router.push(`/login?returnUrl=${encodeURIComponent(pathname)}`);
        }
    }, [username, pathname, router, mounted]);

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) return null;

    // If on login page, always render
    if (pathname === '/login') {
        return <>{children}</>;
    }

    // If not logged in (and not on login page), don't render content (will redirect)
    if (!username) {
        return null;
    }

    // Otherwise render protected content
    return <>{children}</>;
}
