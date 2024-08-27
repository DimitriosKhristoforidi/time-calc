import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "sum",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;

export default typeSlice.reducer;
