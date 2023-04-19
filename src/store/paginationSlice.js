import { createSlice } from "@reduxjs/toolkit";

const initialState = { offset: 0 };

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
  },
});

export const { setOffset } = paginationSlice.actions;
export default paginationSlice.reducer;
