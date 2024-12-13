import axios from "axios";
import { Api } from "../../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTotalIncome = createAsyncThunk(
  "totalIncome/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Api}football_fields_api/analytics/income/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: {
    data: [], // Переименовано в `data` для улучшения читаемости
    loading: false, // Переименовано в `loading`
    error: null, // Переименовано в `error`
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotalIncome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTotalIncome.fulfilled, (state, action) => {
        state.data = action.payload; // Данные из payload присваиваются в `data`
        state.loading = false;
      })
      .addCase(fetchTotalIncome.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default totalIncomeSlice.reducer;
