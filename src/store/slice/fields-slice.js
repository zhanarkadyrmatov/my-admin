import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import axios from "axios";


export const fetchFields = createAsyncThunk(
  "fields/fetchFields",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${Api}admin_api/football_fields_list/`, {
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

export const fieldsSlice = createSlice({
  name: "fields",
  initialState: {
    loading: false,
    error: null,
    fields: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFields.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFields.fulfilled, (state, action) => {
        state.loading = false;
        state.fields = action.payload;
      })
      .addCase(fetchFields.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default fieldsSlice.reducer;