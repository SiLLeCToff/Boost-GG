import {configureStore} from "@reduxjs/toolkit"
import authSlice, {AuthState} from "./authSlice.tsx";

export type RootState = {
    auth: AuthState;
    // Добавьте другие срезы состояния по мере необходимости
};


export default configureStore({
    reducer: {
        auth: authSlice,
    }
})