import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import activeEditReducer from './slices/modalEditSlice';
import oneEventReducer from './slices/oneEventSlice';
import reminderEventReducer from './slices/reminderEventSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    activeEdit: activeEditReducer,
    oneEvent: oneEventReducer,
    reminder: reminderEventReducer,
  },
});

export default store;
