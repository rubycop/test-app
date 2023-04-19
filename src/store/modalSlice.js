import { createSlice } from "@reduxjs/toolkit";

const initialState = { opened: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.opened = true;
    },
    close: (state) => {
      state.opened = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export default modalSlice.reducer;
