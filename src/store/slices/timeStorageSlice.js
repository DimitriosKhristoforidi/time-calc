import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};

export const timeStorageSlice = createSlice({
  name: "timeStorage",
  initialState,
  reducers: {
    addTime: (state, action) => {
      state.list.push(action.payload);
    },
    removeTime: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTime, removeTime } = timeStorageSlice.actions;

export default timeStorageSlice.reducer;
