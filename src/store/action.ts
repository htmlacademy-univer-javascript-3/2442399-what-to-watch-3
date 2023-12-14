import {createAction} from '@reduxjs/toolkit';
import { Genre, Film, AuthorizationStatus } from '../const';

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
export const loadFilms = createAction<Film[]>(Action.LoadFilms);
export const requireAuthorization = createAction<AuthorizationStatus>(Action.RequireAuthorization);

