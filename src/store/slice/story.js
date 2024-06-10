import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";

const initialState = {
  status: null,
  bookings: null,
  error: null,
};

export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${Api}admin_api/bookings_of_field/${id}/`, {
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



const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
        console.error("Error fetching bookings:", action.payload);
      });
  },
});

export default bookingSlice.reducer;