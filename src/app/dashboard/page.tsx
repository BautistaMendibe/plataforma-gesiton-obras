'use client'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const user = useSelector((state: RootState) => state.user.user);
    const router = useRouter();

    // Protege la ruta
    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    // Mostrar pantalla vacía mientras redirige
    if (!user) return null;

    return (
        <main className="p-8 ">

        </main>
    );
}
