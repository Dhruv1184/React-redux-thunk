import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./reducer";
import { thunk } from "redux-thunk";

export const myStore = configureStore({
    reducer:{
        useReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})