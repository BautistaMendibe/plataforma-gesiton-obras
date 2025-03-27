'use client'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { supabase } from '@/lib/supabase';
import { logout } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        dispatch(logout());
        router.push('/');
    };

    return (
        <main className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Bienvenido, {user?.email}</h1>
            <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
                Cerrar sesión
            </button>
        </main>
    );
}
