import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import axios from "axios";
import moment from 'moment';


export const fetchReverse = createAsyncThunk(
  "reserve/fetchReverse",
  async ({ footballId, startDate }, { rejectWithValue }) => {

    console.log(footballId, startDate)

    const formattedDate = (date) => {
      return moment(date).format('YYYY-MM-DD')
    }

    const date = formattedDate(startDate)

    try {
      const response = await axios.get(`${Api}football_fields_api/field-booked-hours/${date}/${footballId}/`, {
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



export const reserveSlice = createSlice({
  name: "reserve",
  initialState: {
    loading: false,
    reverse: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReverse.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReverse.fulfilled, (state, action) => {
        state.reverse = action.payload;
        state.loading = false;
      })
      .addCase(fetchReverse.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default reserveSlice.reducer;