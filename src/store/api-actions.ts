import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoadingStatus } from './action';
import { loadFilms } from './action';
import { Film as Film } from '../const';
import { APIRoute } from '../const';
export const loadFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsLoadingStatus(true));
    const { data } = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setIsLoadingStatus(false));
  }
);
