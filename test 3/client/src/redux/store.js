import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import eventsReducer from './slices/eventsSlice';
import activeEditReducer from './slices/modalEditSlice';
import oneEventReducer from './slices/oneEventSlice';
import reminderEventReducer from './slices/reminderEventSlice';

const rootReducer = combineReducers({
  events: eventsReducer,
  activeEdit: activeEditReducer,
  oneEvent: oneEventReducer,
  reminder: reminderEventReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export default store;
