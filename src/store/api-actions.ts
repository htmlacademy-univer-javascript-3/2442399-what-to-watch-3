import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getFilm, getPromoFilm, getSimilarMovies, setIsLoadingStatus, setUserData } from './action';
import { loadFilms } from './action';
import { Film as Film, FilmShortInfo } from '../const';
import { APIRoute } from '../const';
import { AuthorizationStatus } from '../const';
import { requireAuthorization } from './action';
import { AppDispatch } from '../type/state';
import { AxiosInstance } from 'axios';
import { State } from '../type/state';
import { saveToken } from '../services/token';
import { dropToken } from '../services/token';
import { AuthData } from '../const';
import { Review } from '../const';

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export const loadFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsLoadingStatus(true));
    const { data } = await api.get<FilmShortInfo[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    console.log(false);
    dispatch(setIsLoadingStatus(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, UserData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (user, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login, {headers: {'X-token': user?.token ?? ''}});
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
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const loadFilmByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(`/films/${id}`);
    dispatch(getFilm(data));
  }
);

export const loadReviewsByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'film/fetchReviewsById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Review[]>(`comments/${filmId}`);
    dispatch(getComments(data));
  }
);

export const loadSimilarByID = createAsyncThunk<Film[], string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'film/fetchSimilarById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmShortInfo[]>(`films/${filmId}/similar`);
    dispatch(getSimilarMovies(data));
  }
);

export const loadPostReview = createAsyncThunk<void, UserReview, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFilmReview',
  async ({ comment, rating, filmId }, { extra: api }) => {
    await api.post<UserReview>(`${ApiRoute.Reviews}/${filmId}`, { comment, rating, });
  }
);

export const loadPromoFilm = createAsyncThunk<Film, undefined, {
  state: State;
  dispatch: AppDispatch;
}>(
  'main/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>("promo");
    dispatch(getPromoFilm(data));
  }
);

export const loadFavoriteFilms = createAsyncThunk<Film[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'main/fetchFavoriteFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film[]>(ApiRoute.Favorite);
    return data;
  }
);

export const changeFilmFavoriteStatus = createAsyncThunk<Film, { filmId: string; status: number }, {
  state: State;
  extra: AxiosInstance;
}>(
  'main/changeFilmFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<Film>(`${ApiRoute.Favorite}/${id}/${isFavorite}`);
    return data;
  }
);

export const changePromoFavoriteStatus = createAsyncThunk<Film, { filmId: string; status: number }, {
  state: State;
  extra: AxiosInstance;
}>(
  'main/changePromoFavoriteStatus',
  async ({ filmId: id, status: isFavorite }, { extra: api }) => {
    const { data } = await api.post<Film>(`${ApiRoute.Favorite}/${id}/${isFavorite}`);
    return data;
  }
);

export const loadMyListFilms = createAsyncThunk<void, {id: string; status: number; user: UserData}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/favourite-status',
  async ({id, status, user}, {dispatch, extra: api}) => {
    const {data} = await api.post<MovieFullInfo>(`favorite/${id}/${status}`, {}, {headers: {'X-Token': user?.token ?? ''}});
    dispatch(addFavouriteMovies(data));
  },
);