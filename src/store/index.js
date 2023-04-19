import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    modal: modalReducer,
  },
});
