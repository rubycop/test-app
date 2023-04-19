import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import modalReducer from "./modalSlice";
import paginationSlice from "./paginationSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    modal: modalReducer,
    pagination: paginationSlice
  },
});
