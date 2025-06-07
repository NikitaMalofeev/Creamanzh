import { createSlice } from '@reduxjs/toolkit';

interface LinkListState {
    value: number;
}

const initialState: LinkListState = { value: 0 };

export const linkListSlice = createSlice({
    name: 'linkList',
    initialState,
    reducers: {
        increment: (state) => { state.value += 1; },
    },
});

export const { } = linkListSlice.actions;
export default linkListSlice.reducer;