/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    setEvent: (state, action) => action.payload,
    addEvent: (state, action) => [...state, action.payload],
    updateEvent: (state, action) => state.map((event) => (event.id === action.payload.id ? action.payload : event)),
    deleteEvent: (state, action) => state.filter((event) => event.id !== action.payload),
  },
});
export const {
  setEvent, addEvent, updateEvent, deleteEvent,
} = eventSlice.actions;

export default eventSlice.reducer;
