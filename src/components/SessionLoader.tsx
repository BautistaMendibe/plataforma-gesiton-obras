'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/userSlice'

export default function SessionLoader() {
    const dispatch = useDispatch()

    useEffect(() => {
        const loadSession = async () => {
            const { data, error } = await supabase.auth.getUser()
            if (data.user) {
                dispatch(setUser({ id: data.user.id, email: data.user.email }))
            }
        }

        loadSession()
    }, [dispatch])

    return null // no renderiza nada
}
