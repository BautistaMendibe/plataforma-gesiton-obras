'use client'

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { RootState } from '@/store';
import LoginForm from '@/components/LoginForm';

export default function Home() {
    const user = useSelector((state: RootState) => state.user.user);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        }
    }, [user, router]);

    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            <LoginForm />
        </main>
    );
}
