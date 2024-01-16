import {createAction} from '@reduxjs/toolkit';
import { Genre, Film, AuthorizationStatus, FilmShortInfo, Review } from '../const';
import { UserData } from './api-actions';

enum Action{
    ChangeGenre = 'genre/change',
    FilterFilmByGenre = 'genre/films',
    ShowMoreFilms = 'more/films',
    ResetListFilms = 'more/reset',
    SetIsLoadingStatus = 'load/isLoadingStatus',
    LoadFilms = 'load/films',
    RequireAuthorization = 'authorize/status'
}

export const changeGenre = createAction<Genre>(Action.ChangeGenre);
export const filterFilmByGenre = createAction(Action.FilterFilmByGenre);
export const showMoreFilms = createAction(Action.ShowMoreFilms);
export const resetListFilms = createAction(Action.ResetListFilms);
export const setIsLoadingStatus = createAction<boolean>(Action.SetIsLoadingStatus);
export const loadFilms = createAction<FilmShortInfo[]>(Action.LoadFilms);
export const requireAuthorization = createAction<AuthorizationStatus>(Action.RequireAuthorization);


export const getFilm = createAction<Film | null>('get/films');
export const getSimilarMovies = createAction<FilmShortInfo[]>('get/similar-movies');
export const getComments = createAction<Review[]>('get/comments');
export const getPromoFilm = createAction<Film>('get/promo');
export const addReview = createAction<CommentsProps[]>('addReview');
export const setUserData = createAction<UserData>('set/user');
export const setMyListFilms = createAction<FilmShortInfo>('set/favourite-movies');
