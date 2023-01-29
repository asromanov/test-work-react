import { createSlice } from '@reduxjs/toolkit';

export const servicesErrorSlice = createSlice({
  name: 'servicesError',
  initialState: false,
  reducers: {
    setServicesError: (state, action) => action.payload,
  },
});

export const { setServicesError } = servicesErrorSlice.actions;

export default servicesErrorSlice.reducer;
