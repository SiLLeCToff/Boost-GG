import {createSlice} from "@reduxjs/toolkit";

export type AuthState = {
    role: string;
    _id: number;
    isAuthenticated: boolean;
    accessToken: string;
    balance: number;
    email: string;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        _id:null,
        isAuthenticated: false,
        role: "ADMIN",
        accessToken: null,
        email: null,
        balance: null,
    },
    reducers: {
        loginSuccess:(state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.role = action.payload.role;
            state.email = action.payload.email;
            state.balance = action.payload.balance;
        },
        registrationSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.role = action.payload.role;
            state.email = action.payload.email;
            state.balance = action.payload.balance;
        },
        logoutSuccess: (state) : void => {
            state._id = null;
            state.isAuthenticated = false;
            state.accessToken = null;
            state.role = "GUEST";
            state.email = null;
            state.balance = null;
        }
    },
})

export const {
    loginSuccess,
    registrationSuccess,
    logoutSuccess
} = authSlice.actions

export default authSlice.reducer