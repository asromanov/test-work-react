import { createSlice } from '@reduxjs/toolkit';

export const oneEventSlice = createSlice({
  name: 'eventContent',
  initialState: false,
  reducers: {
    setEventContent: (state, action) => action.payload,
  },
});

export const { setEventContent } = oneEventSlice.actions;

export default oneEventSlice.reducer;
