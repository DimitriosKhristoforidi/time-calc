import { configureStore } from "@reduxjs/toolkit";
import timeStorageSlice from "./slices/timeStorageSlice";
import typeSlice from "./slices/typeSlice";

export default configureStore({
  reducer: {
    timeStorage: timeStorageSlice,
    type: typeSlice,
  },
});
