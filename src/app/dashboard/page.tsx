'use client'

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const user = useSelector((state: RootState) => state.user.user);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <main className="p-8 ">
            Dashboard general, graficos y resumenes
        </main>
    );
}
