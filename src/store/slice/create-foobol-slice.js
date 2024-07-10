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

export const getBranchGetId = createAsyncThunk(
  "advantages/getBranchGetId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Api}admin_api/football-field/${id}/`,
        {
          headers: {
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

export const getLocationsCities = createAsyncThunk(
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
  async (data, { rejectWithValue, dispatch }) => {
    console.log(data, "datatwtat");

    try {
      const response = await axios.post(
        `${Api}admin_api/football-field/`,
        data.formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const id = await response.data.id;
      const advantages = await data.data;
      const PATCHAdvantagesData = {
        id,
        advantages,
      };

      console.log(response.data, "response.data");
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Ошибка сервера:", error.response.data);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Запрос не отправлен:", error.request);
        return rejectWithValue({ error: "Network error" });
      } else {
        console.error("Ошибка:", error.message);
        return rejectWithValue({ error: error.message });
      }
    }
  }
);
export const PATCHAdvantages = createAsyncThunk(
  "advantages/PATCHAdvantages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${Api}admin_api/football-field/${data.id}/`,
        {
          advantages: data.advantages,
        },
        {
          headers: {
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

export const getSportComplexList = createAsyncThunk(
  "advantages/getSportComplexList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Api}football_fields_api/sport-complex-types/`,
        {
          headers: {
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

export const postCreacteFieldType = createAsyncThunk(
  "advantages/postCreacteFieldType",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${Api}admin_api/football-field-type/`,
        data[0],
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const id = await response.data.id;
      const advantages = await data[1];
      const newData = await [id, advantages];

      dispatch(punchAdvantagesCreate(newData));

      console.log(response.data, "1000");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const punchAdvantagesCreate = createAsyncThunk(
  "advantages/punchAdvantagesCreate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${Api}admin_api/football-field/${data[0]}`,
        data[1],
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
export const advantagesSlice = createSlice({
  name: "advantages",

  initialState: {
    advantages: null,
    status: null,
    error: null,
    isCreate: null,
    locationsCities: null,
    creacteFoobolStatus: null,
    sportComplexList: null,
    isCreateType: null,
    idFields: null,
    fieldsIdInfo: null,
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
      .addCase(postAdvantages.pending, (state) => {
        state.creacteFoobolStatus = "loading";
        state.isCreate = true;
      })
      .addCase(postAdvantages.fulfilled, (state, action) => {
        state.creacteFoobolStatus = "fulfilled";
        state.isCreate = false;
        state.idFields = action.payload.id;
      })
      .addCase(postAdvantages.rejected, (state, action) => {
        state.creacteFoobolStatus = "rejected";
        state.error = action.payload;
        state.isCreate = false;
        console.error("Error fetching advantages:", action.payload);
      })
      .addCase(getSportComplexList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSportComplexList.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.sportComplexList = action.payload;
      })
      .addCase(getSportComplexList.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        console.error("Error fetching advantages:", action.payload);
      })
      .addCase(postCreacteFieldType.pending, (state) => {
        state.creacteFoobolStatus = "loading";
        state.isCreateType = true;
      })
      .addCase(postCreacteFieldType.fulfilled, (state, action) => {
        state.creacteFoobolStatus = "fulfilled";
        state.isCreateType = false;
      })
      .addCase(postCreacteFieldType.rejected, (state, action) => {
        state.creacteFoobolStatus = "rejected";
        state.error = action.payload;
        state.isCreateType = false;
        console.error("Error fetching advantages:", action.payload);
      })
      .addCase(getBranchGetId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBranchGetId.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.fieldsIdInfo = action.payload;
      })
      .addCase(getBranchGetId.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        console.error("Error fetching advantages:", action.payload);
      });
  },
});

export default advantagesSlice.reducer;
