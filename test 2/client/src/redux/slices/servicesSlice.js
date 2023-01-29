import { createSlice } from '@reduxjs/toolkit';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: [],
  reducers: {
    setServices: (state, action) => action.payload,
  },
});

export const { setServices } = servicesSlice.actions;

const fetchServices = (payload) => ({ type: 'FETCH_SERVICES', payload });

export default servicesSlice.reducer;

export { fetchServices };
