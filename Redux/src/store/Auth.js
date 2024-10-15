import {  createSlice } from "@reduxjs/toolkit";
import { counterActions } from "./Counter";

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});


export const logoutAction = () => {
    return (dispatch) => {
        dispatch(counterActions.resetCounter(0));
        dispatch(authActions.logout());
    }
};

export const authActions = authSlice.actions;
export default authSlice.reducer;