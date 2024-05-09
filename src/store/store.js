import { configureStore } from "@reduxjs/toolkit";
import user from './slice/user.slice';
import fields from './slice/fields-slice';

const store = configureStore({
  reducer: {
    user,
    fields
  },
});

export default store;