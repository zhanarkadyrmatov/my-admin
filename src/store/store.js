import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user.slice";
import fields from "./slice/fields-slice";
import armor from "./slice/armor";
import story from "./slice/story";
import createFoobol from "./slice/create-foobol-slice";
import reserveSlice from "./slice/reserve-slice";
import arbitratorSlice from "./slice/arbitrators";
import searchSlice from "./slice/search-slice";
const store = configureStore({
  reducer: {
    user,
    fields,
    armor,
    story,
    reserveSlice,
    createFoobol,
    arbitratorSlice,
    searchSlice,
  },
});

export default store;
