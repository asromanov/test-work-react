import { createSlice } from '@reduxjs/toolkit';

export const reminderEventSlice = createSlice({
  name: 'reminderEvent',
  initialState: false,
  reducers: {
    setReminderEvent: (state, action) => action.payload,
  },
});

export const { setReminderEvent } = reminderEventSlice.actions;

export default reminderEventSlice.reducer;
