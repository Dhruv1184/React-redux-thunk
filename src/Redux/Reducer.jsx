import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users:{}
}

export const userThunk = createAsyncThunk('users',async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

const userData = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{
        addInitialData:(state,action)=>{
            state.users = [...action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(userThunk.fulfilled,(state,action)=>{
            state.users=action.payload
        })
    }
})

export const userActions = userData.actions
export const useReducer = userData.reducer
export const useSelectors = (state)=>state.useReducer.users