import axios from "axios";
import { Api } from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFootballFieldsList = createAsyncThunk(
  "fields/getFootballFieldsList",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${Api}admin_api/football-field/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const id = response.data[0].id;
      dispatch(getFootballFieldsId(id))

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const getFootballFieldsId = createAsyncThunk(
  "fields/getFootballFieldsId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${Api}admin_api/football_field_type_list/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {

      return rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  status: null,
  footballFields: [],
  fields: [],
  error: null,
};

export const armorSlice = createSlice({
  name: "footballFields",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFootballFieldsList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFootballFieldsList.fulfilled, (state, action) => {
        state.footballFields = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getFootballFieldsList.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        console.error("Error fetching football fields:", action.payload);
      })
      .addCase(getFootballFieldsId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFootballFieldsId.fulfilled, (state, action) => {
        state.fields = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getFootballFieldsId.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        console.error("Error fetching football fields:", action.payload);
      })

  },
});

export default armorSlice.reducer;
