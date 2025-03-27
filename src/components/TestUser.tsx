'use client'

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import type { RootState } from '@/store';

export default function TestUser() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <div>
            <p>Usuario: {user ? user.email : 'No hay usuario'}</p>
            <button onClick={() => dispatch(setUser({ id: '1', email: 'bauti@test.com' }))}>
                Setear usuario
            </button>
        </div>
    );
}
