import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
    name: 'ganes',
    initialState: {
        value: [],
    },
    reducers: {
        setGamesData: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { setGamesData } = gamesSlice.actions;

export const games = (state: any) => state.games.value;

export default gamesSlice.reducer;
