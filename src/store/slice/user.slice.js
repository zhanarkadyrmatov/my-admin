import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import {axios} from './user.slice'
const initialState = {

}

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetch(Api)
        const data = await response.json()
        return data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer