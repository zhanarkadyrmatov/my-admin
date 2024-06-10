import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Api } from "../../api";

import axios from "axios";

const initialState = {};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${Api}user_api/login/`, credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
