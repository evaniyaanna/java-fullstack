import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");

export const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: savedUser ? JSON.parse(savedUser) : null
    },

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },

        removeUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },

        setUserFromLocalStorage: (state) => {
            const savedUser = localStorage.getItem("user");

            if (savedUser) {
                state.user = JSON.parse(savedUser);
            }
        }
    }
});

export const {
    setUser,
    removeUser,
    setUserFromLocalStorage
} = authSlice.actions;

export default authSlice.reducer;