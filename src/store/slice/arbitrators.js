import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import axios from "axios";


export const fetchArbitrators = createAsyncThunk(
  "arbitrators/fetchArbitrators",
  async (_, { rejectWithValue }) => {

    try {
      const response = await axios.get(`${Api}user_api/arbitrators/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
)



export const arbitratorSlice = createSlice({
  name: "arbitrator",
  initialState: {
    loading: false,
    arbitrators: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArbitrators.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArbitrators.fulfilled, (state, action) => {
        state.arbitrators = action.payload;
        state.loading = false;
      })
      .addCase(fetchArbitrators.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default arbitratorSlice.reducer;