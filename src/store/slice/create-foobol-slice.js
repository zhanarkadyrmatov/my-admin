import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../../api";

export const getAdvantages = createAsyncThunk(
    "advantages/getAdvantages",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Api}admin_api/advantages_list/`, {
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

export const createFoobolField = createAsyncThunk(
  "advantages/createFoobolField",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Api}admin_api/football_field_create/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const getLocationsCities  = createAsyncThunk(
    "advantages/getLocationsCities",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Api}locations/cities/`, {
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




export const postAdvantages = createAsyncThunk(
    "advantages/postAdvantages",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${Api}admin_api/football_field_create/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                data
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)



const advantagesSlice = createSlice({
    name: "advantages",

    initialState: {
        advantages: null,
        status: null,
        error: null,
        locationsCities: null,
        creacteFoobolStatus: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdvantages.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAdvantages.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.advantages = action.payload;
            })
            .addCase(getAdvantages.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
                console.error("Error fetching advantages:", action.payload);
            })
            .addCase(getLocationsCities.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getLocationsCities.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.locationsCities = action.payload;
            })
            .addCase(getLocationsCities.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload;
                console.error("Error fetching advantages:", action.payload);
            })
            .addCase(createFoobolField.pending, (state) => {
                state.creacteFoobolStatus = "loading";
            })
            .addCase(createFoobolField.fulfilled, (state, action) => {
                state.creacteFoobolStatus = "fulfilled";
            })
            .addCase(createFoobolField.rejected, (state, action) => {
                state.creacteFoobolStatus = "rejected";
                state.error = action.payload;
                console.error("Error fetching advantages:", action.payload);
            })
            
    },
});

export default advantagesSlice.reducer

