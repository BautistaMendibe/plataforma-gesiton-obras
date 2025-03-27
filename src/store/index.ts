import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Tipos para usar en toda la app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
