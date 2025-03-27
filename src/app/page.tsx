'use client'

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RootState } from '@/store';
import LoginForm from '@/components/LoginForm';

export default function Home() {
    const { user, loadingSession } = useSelector((state: RootState) => state.user);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        }
    }, [user, router]);

    if (loadingSession || user) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </main>
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            <LoginForm />
        </main>
    );
}
