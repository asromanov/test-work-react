import { createSlice } from '@reduxjs/toolkit';

export const notificationEventSlice = createSlice({
  name: 'notificationEvent',
  initialState: false,
  reducers: {
    setNotificationEvent: (state, action) => action.payload,
  },
});

export const { setNotificationEvent } = notificationEventSlice.actions;

export default notificationEventSlice.reducer;
