import { createAction , createSlice , createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { Api } from "../../api";

export const getAdvantages = createAsyncThunk(
    "advantages/getAdvantages",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Api}admin_api/advantages_list/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



const advantagesSlice = createSlice({
    name: "advantages",

    initialState: {
        advantages: null,
        status: null,
        error: null,
    },
    extraReducers : (builder) => {
        builder
            .addCase(getAdvantages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAdvantages.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.advantages = action.payload;
            })
            .addCase(getAdvantages.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
                console.error("Error fetching advantages:", action.payload);
            });
    },
});

export default advantagesSlice.reducer

