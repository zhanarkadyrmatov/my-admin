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
    async (data, { rejectWithValue }) => {
        console.log(data ,'datatwtat');

        try {
            const response = await axios.post(
                `${Api}admin_api/football-field/`,
              data.formData,
                {  
                    headers: {
                        "Content-Type": "multipart/form-data", // Используем application/json, если не загружаем файлы
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
        
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

export const getSportComplexList = createAsyncThunk(
    "advantages/getSportComplexList",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${Api}football_fields_api/sport-complex-types/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    })




const advantagesSlice = createSlice({
    name: "advantages",

    initialState: {
        advantages: null,
        status: null,
        error: null,
        isCreate: null,
        locationsCities: null,
        creacteFoobolStatus: null,
        sportComplexList: null,
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

    },
});

export default advantagesSlice.reducer

