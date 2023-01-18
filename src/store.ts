import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import snackBarReducer from "./features/snackbar/snackbar";

export const store = configureStore({
  reducer: {
    snackbar: snackBarReducer,
  },
});
