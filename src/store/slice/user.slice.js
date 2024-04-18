import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import axios from "axios";

const initialState = {};

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${Api}user_api/login_admin/`, credentials);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    status: null,
    error: null,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;