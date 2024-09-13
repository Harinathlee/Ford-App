import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/slice"; // Import your slice reducers
import userApi from "../features/user/api";
import apiMiddleware from "../store/middleware";

const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    // Add other slices here
  },
  // You can add middleware here if needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(apiMiddleware),
});

export default store;
