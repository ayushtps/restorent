import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk('login', async (registerForm) => {
    try {
        let response = await axios({
            method: 'post',
            url: 'https://dashboard-api-one.vercel.app/api/v1/login',
            data: {
                email: registerForm.email,
                password: registerForm.password
            }
        })
        console.log(response.data);
        return response.data
    }
    catch (error) {
        if (error.response) {
            throw error.response.data.message;
        } else {
            throw error;
        }
    }
})

export const RegisterUser = createAsyncThunk('register', async (registerForm) => {
    try {
        let response = await axios({
            method: 'post',
            url: 'https://dashboard-api-one.vercel.app/api/v1/register',
            data: registerForm
        })
        console.log(response.data);
        return response.data
    }
    catch (error) {
        if (error.response) {
            throw error.response.data.message;
        } else {
            throw error;
        }
    }
})


export const LoginSlice = createSlice({
    name: 'login/register',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(LoginUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isError = true;
        })
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(RegisterUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isError = true;
        })
    }
})