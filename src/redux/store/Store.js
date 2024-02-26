import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../slice/UserSlice";
import { LoginSlice } from "../slice/LoginSlice";

export const store = configureStore({
    reducer:{
        user:UserSlice.reducer,
        login:LoginSlice.reducer
    }
})