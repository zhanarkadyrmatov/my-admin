import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../../api";

// Async action to fetch analytics data
export const fetchAnalitOrdersFields = createAsyncThunk(
  "analitOrdersFields/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${Api}football_fields_api/analytics/clients/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching data"
      );
    }
  }
);

const analitOrdersFieldsSlice = createSlice({
  name: "analitOrdersFields",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalitOrdersFields.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalitOrdersFields.fulfilled, (state, action) => {
        state.data = action.payload || []; // Fallback if payload is empty
        state.loading = false;
      })
      .addCase(fetchAnalitOrdersFields.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default analitOrdersFieldsSlice.reducer;
