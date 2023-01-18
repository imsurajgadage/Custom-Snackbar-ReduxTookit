import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  isOpen: boolean;
}

const initialState: SnackbarState = {
  isOpen: false,
};
export const SnackBarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    isVisible: (
      state,
      payload: PayloadAction<{
        message?: string;
        variant?: string;
      }>
    ) => {
      state.isOpen = true;
      state.message = payload.payload.message;
    },
    isHidden: (state) => {
      state.isOpen = false;
    },
  },
});
export const { isVisible, isHidden } = SnackBarSlice.actions;
export default SnackBarSlice.reducer;
