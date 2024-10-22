import { createSlice } from "@reduxjs/toolkit";
import { IInitialsState } from "./user.interface";
import { register, login, checkAuth, logout } from "./user.actions";
import { getStoreLocal } from "@/utils/local-storage";

const initialState: IInitialsState = {
    user: getStoreLocal('user'),
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.user = payload.user  // Теперь не будет ошибки
            })
            .addCase(register.rejected, state => {
                state.isLoading = false
                state.user = null
            })
            .addCase(login.pending, state => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.user = payload.user  // Теперь не будет ошибки
            })
            .addCase(login.rejected, state => {
                state.isLoading = false
                state.user = null
            })
            .addCase(logout.fulfilled, state => {
                state.isLoading = false
                state.user = null
            })
            .addCase(checkAuth.fulfilled, (state, { payload }) => {
                state.user = payload.user
            })
    }
})
