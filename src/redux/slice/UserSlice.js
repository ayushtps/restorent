import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Notify from "../../Notify";

export const getApiData = createAsyncThunk('fetchData', async () => {
    const response = await axios({
        method: 'get',
        url: process.env.REACT_APP_GETAPI ,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`
        }
    })
    return response.data
})

export const deleteApiData = createAsyncThunk('deleteData', async (id,thunkAPI) => {
    const response = await axios({
        method: 'delete',
        url: 'https://dashboard-api-one.vercel.app/api/v1/deleteUser/' + id,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`,
        }
    })
    Notify("success", "Delete successfully")
    thunkAPI.dispatch(getApiData())
    return response.data
})

export const editApiData = createAsyncThunk('updateData', async (action,thunkAPI) => {
    const { firstName, lastName, mobileNumber } = action.registerForm
    console.log(action); 
    const response = await axios({
        method: 'put',
        url: "https://dashboard-api-one.vercel.app/api/v1/updateUser/" + action.editObj._id,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`
        },
        data: { firstName: firstName, lastName: lastName, mobileNumber: mobileNumber }
    })
    Notify("success", "Update successfully")
    thunkAPI.dispatch(getApiData())
    return response.data
})

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getApiData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(getApiData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getApiData.rejected, (state, action) => {
            state.isError = true;
        })
        builder.addCase(deleteApiData.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(deleteApiData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteApiData.rejected, (state, action) => {
            state.isError = true;
        })
        builder.addCase(editApiData.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(editApiData.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(editApiData.rejected, (state, action) => {
            state.isError = true;
        })
    }
})