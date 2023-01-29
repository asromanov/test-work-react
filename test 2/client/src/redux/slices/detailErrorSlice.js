import { createSlice } from '@reduxjs/toolkit';

export const detailErrorSlice = createSlice({
  name: 'detailError',
  initialState: false,
  reducers: {
    setDetailError: (state, action) => action.payload,
  },
});

export const { setDetailError } = detailErrorSlice.actions;

export default detailErrorSlice.reducer;
