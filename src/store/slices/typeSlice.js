import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "one-by-one",
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
