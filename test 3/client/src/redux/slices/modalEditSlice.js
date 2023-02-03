import { createSlice } from '@reduxjs/toolkit';

export const modalEditSlice = createSlice({
  name: 'activeEdit',
  initialState: false,
  reducers: {
    setActiveEdit: (state) => !state,
  },
});

export const { setActiveEdit } = modalEditSlice.actions;

export default modalEditSlice.reducer;
