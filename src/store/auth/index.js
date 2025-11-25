import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    customerDetails: "",
    order: "",
    price: ""
}

const authSlice = createSlice({
    name: "step form",
    initialState,
    reducers: {
        updateVal: (state, action) => {
            const { value, field } = action.payload;
            state[field] = value;
        },
    }
});

export const { updateVal } = authSlice.actions;

export default authSlice.reducer;