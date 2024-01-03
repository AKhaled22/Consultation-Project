import { createSlice } from '@reduxjs/toolkit';

export const ErrorPopupSlice = createSlice({
  name: 'errorpopup',
  initialState: { data: '' },
  reducers: {
    setPopup: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setPopup } = errorpopup.actions;

export default errorpopup.reducer;