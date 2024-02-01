import userApi from "@/api/user-api";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    // Add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, logger),
});
