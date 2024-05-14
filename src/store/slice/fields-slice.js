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

export const fetchFieldsIdList = createAsyncThunk(
  "fields/fetchFieldsIdList",
  async (id, { rejectWithValue, dispatch }) => {
    console.log(id)
    try {
      const response = await axios.get(`${Api}admin_api/football_field_type_list/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(response.data[0].id)
      dispatch(fetchFieldsIdDetail(response.data[0].id))
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
)

export const fetchFieldsIdDetail = createAsyncThunk(
  "fields/fetchFieldsIdDetail",
  async (id, { rejectWithValue }) => {
    try {
      const detail = await axios.get(`${Api}admin_api/football_field_type_detail/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const comments = await axios.get(`${Api}admin_api/football_field_type_comments/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const response = {
        detail: detail.data,
        comments: comments.data
      }
      return response;
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
    fieldsIdList: null,
    fieldsIdDetail: null,
    fieldsComments: null,
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
      .addCase(fetchFieldsIdList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFieldsIdList.fulfilled, (state, action) => {
        state.loading = false;
        state.fieldsIdList = action.payload;
      })
      .addCase(fetchFieldsIdList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFieldsIdDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFieldsIdDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.fieldsIdDetail = action.payload.detail;
        state.fieldsComments = action.payload.comments
      })
      .addCase(fetchFieldsIdDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export default fieldsSlice.reducer;