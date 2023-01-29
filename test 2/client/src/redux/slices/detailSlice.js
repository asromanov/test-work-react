import { createSlice } from '@reduxjs/toolkit';

export const detailSlice = createSlice({
  name: 'detail',
  initialState: {},
  reducers: {
    setDetail: (state, action) => action.payload,
  },
});

export const { setDetail } = detailSlice.actions;

const fetchDetailInfo = (payload) => ({ type: 'FETCH_DETAIL', payload });

export default detailSlice.reducer;

export { fetchDetailInfo };
