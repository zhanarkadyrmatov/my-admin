import axios from "axios";
import { Api } from "../../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Асинхронный thunk для получения количества новых клиентов
export const fetchNumberOfNewClients = createAsyncThunk(
  "numberOfNewClients/fetchNumberOfNewClients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${Api}football_fields_api/analytics/count/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Авторизация через токен
          },
        }
      );
      return response.data; // Возвращаем данные после успешного запроса
    } catch (error) {
      return rejectWithValue(error.response?.data || "Ошибка запроса"); // Обработка ошибок, если response может быть undefined
    }
  }
);

// Создание слайса для состояния новых клиентов
const numberOfNewClientsSlice = createSlice({
  name: "numberOfNewClients",
  initialState: {
    data: [], // Данные по умолчанию — пустой массив
    loading: false, // Индикатор загрузки
    error: null, // Состояние ошибки
  },
  reducers: {}, // Место для дополнительных reducers, если потребуется
  extraReducers: (builder) => {
    builder
      .addCase(fetchNumberOfNewClients.pending, (state) => {
        state.loading = true; // Запрос в процессе, включаем индикатор загрузки
        state.error = null; // Очищаем ошибки перед новым запросом
      })
      .addCase(fetchNumberOfNewClients.fulfilled, (state, action) => {
        state.data = action.payload; // Данные успешного запроса
        state.loading = false; // Отключаем индикатор загрузки
      })
      .addCase(fetchNumberOfNewClients.rejected, (state, action) => {
        state.error = action.payload || "Неизвестная ошибка"; // Сохраняем ошибку
        state.loading = false; // Отключаем индикатор загрузки
      });
  },
});

// Экспорт reducer для использования в store
export default numberOfNewClientsSlice.reducer;
