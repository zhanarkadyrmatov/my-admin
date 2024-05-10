import { configureStore } from "@reduxjs/toolkit";
import user from './slice/user.slice';
import fields from './slice/fields-slice';
import armor from "./slice/armor";
import story from "./slice/story";

const store = configureStore({
  reducer: {
    user,
    fields,
    armor,
    story
  },
});

export default store;