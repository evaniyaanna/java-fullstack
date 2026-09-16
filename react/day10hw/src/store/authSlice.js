import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null
    },

    reducers: {

        setUser: (state, action) => {
            state.user = action.payload;

            localStorage.setItem(
                "user",
                JSON.stringify(action.payload)
            );
        },

        removeUser: (state) => {
            state.user = null;

            localStorage.removeItem("user");
        },

        setUserFromLocalStorage: (state) => {

            const user = localStorage.getItem("user");

            if (user) {
                state.user = JSON.parse(user);
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