import {
  call, delay, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { setServices } from '../slices/servicesSlice';
import { setServicesError } from '../slices/servicesErrorSlice';

const axiosCall = () => axios.get('http://localhost:7070/api/services');

function* fetchServicesWorker(action) {
  try {
    yield put(setServicesError(false));
    yield delay(700);
    const res = yield call(axiosCall, action.payload);
    yield put(setServices(res.data));
  } catch (e) {
    yield put(setServicesError(true));
    console.log(e);
  }
}

function* servicesWatcher() {
  yield takeLatest('FETCH_SERVICES', fetchServicesWorker);
}

export default servicesWatcher;
