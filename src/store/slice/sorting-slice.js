import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api } from '../../api';

export const walletPost = createAsyncThunk(
  "sorting/walletPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Api}football_fields_api/booking/?start=2024-11-5&end=2024-11-7`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    loading: false,
    sortedData: [],
    error: null,
    sortConfig: { key: null, direction: 'ascending' },
  },
  reducers: {
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
    },
    setSortedData: (state, action) => {
      state.sortedData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(walletPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(walletPost.fulfilled, (state, action) => {
        state.loading = false;
        state.sortedData.push(action.payload);
      })
      .addCase(walletPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSortConfig, setSortedData } = sortingSlice.actions;
export default sortingSlice.reducer;

