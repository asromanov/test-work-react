import {
  call, delay, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { setDetail } from '../slices/detailSlice';
import { setDetailError } from '../slices/detailErrorSlice';

const axiosCallDetail = (id) => axios.get(`http://localhost:7070/api/services/${id}`);

function* fetchDetailWorker(action) {
  try {
    yield put(setDetailError(false));
    yield delay(700);
    const res = yield call(axiosCallDetail, action.payload);
    yield put(setDetail(res.data));
  } catch (e) {
    yield put(setDetailError(true));
    console.log(e);
  }
}

function* detailInfoWatcher() {
  yield takeLatest('FETCH_DETAIL', fetchDetailWorker);
}

export default detailInfoWatcher;
