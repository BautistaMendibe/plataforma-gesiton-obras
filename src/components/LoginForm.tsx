'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});



type FormData = z.infer<typeof schema>;

export default function LoginForm() {
    const dispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        const { email, password } = data;

        const { data: session, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(`Error al loguear: ${error.message}`);
            return;
        }

        if (session.user) {
            dispatch(setUser({ id: session.user.id, email: session.user.email }));
            router.push('/dashboard');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-sm">
            <input type="email" placeholder="Email" {...register('email')} className="border p-2" />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <input type="password" placeholder="Contraseña" {...register('password')} className="border p-2" />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Iniciar sesión</button>
        </form>
    );
}
