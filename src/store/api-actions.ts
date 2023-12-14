import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsLoadingStatus } from './action';
import { loadFilms } from './action';
import { Film as Film } from '../const';
import { APIRoute } from '../const';
import { AuthorizationStatus } from '../const';
import { requireAuthorization } from './action';

type UserData = {
  id: number;
  email: string;
  password: string;
}

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const data = await api.post<UserData>(APIRoute.Login, {login, password});
    saveToken(data.data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

