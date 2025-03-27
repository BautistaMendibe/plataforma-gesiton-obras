import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    user: null | { id: string; email: string };
    loadingSession: boolean;
}

const initialState: UserState = {
    user: null,
    loadingSession: true, // arranca en true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.loadingSession = false;
        },
        logout(state) {
            state.user = null;
            state.loadingSession = false;
        },
        finishLoading(state) {
            state.loadingSession = false;
        },
    },
});

export const { setUser, logout, finishLoading } = userSlice.actions;
export default userSlice.reducer;
