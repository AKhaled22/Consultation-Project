import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import pageReducer from "./features/pageSlice";
import nameReducer from "./features/nameSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer,
    firstname: nameReducer,
  },
});
