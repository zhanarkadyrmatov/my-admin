import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../api";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (search, { rejectWithValue }) => {
    const params = {};

    if (search) {
      params.search = search;
    }

    try {
      const response = await axios.get(`${Api}user_api/users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    users: null,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setUsers } = searchSlice.actions;
export default searchSlice.reducer;
