import { createSlice } from "@reduxjs/toolkit";
import { CARS } from "../utils/contants";

const initialState = {
  cars: CARS.data,
  currentItem: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    filterItemsByName: (state, action) => {
      if (action.payload.trim() !== "")
        state.cars = initialState.cars.filter((car) =>
          car.name.toUpperCase().includes(action.payload.toUpperCase())
        );
      else state.cars = initialState.cars;
    },
    setItem: (state, action) => {
      state.currentItem = action.payload;
    },
    addItem: (state, action) => {
      state.cars.unshift(action.payload);
    },
    editItem: (state, action) => {
      const index = state.cars.findIndex(
        (item) => item.uid === action.payload.uid
      );
      state.cars[index] = action.payload;
    },
    deleteItem: (state, action) => {
      state.cars = state.cars.filter((car) => car.uid !== action.payload);
    },
  },
});

export const { filterItemsByName, setItem, addItem, editItem, deleteItem } =
  carSlice.actions;
export default carSlice.reducer;
