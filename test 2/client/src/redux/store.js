import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import servicesReducer from './slices/servicesSlice';
import servicesErrorReducer from './slices/servicesErrorSlice';
import detailReducer from './slices/detailSlice';
import detailErrorReducer from './slices/detailErrorSlice';
import mySagas from './sagas/mySagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    services: servicesReducer,
    servicesError: servicesErrorReducer,
    detail: detailReducer,
    detailError: detailErrorReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(mySagas);
