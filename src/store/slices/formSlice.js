import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    disabled: true,

}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm(state, action) {
            state.disabled = action.payload.disabled;
        }
    }
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;