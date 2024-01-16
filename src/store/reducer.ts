import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, FilmShortInfo, Genre, INITIAL_COUNT_FILMS, INITIAL_GENRE } from '../const';
import { changeGenre, filterFilmByGenre, resetListFilms, setIsLoadingStatus, showMoreFilms, loadFilms, requireAuthorization, getFilm, getComments, getSimilarMovies, getPromoFilm, setMyListFilms, setUserData } from './action';
import { Film } from '../const';
import { UserData } from './api-actions';

type InitialState = {
  genre: Genre;
  films: FilmShortInfo[];
  visibleFilmCount: number;
  filmsByGenre: FilmShortInfo[];
  dataIsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  film: Film | null;
  reviews: Review[] | null;
  similarFilms: FilmShortInfo[];
  promoFilm: Film | null;
  myListFilms: FilmShortInfo[];
  favouriteFilms: FilmShortInfo[];
}

const initialState: InitialState = {
  genre: INITIAL_GENRE,
  films: [],
  visibleFilmCount: INITIAL_COUNT_FILMS,
  filmsByGenre: [],
  dataIsLoading: false,
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  film: null,
  reviews: null,
  similarFilms: [],
  promoFilm: null,
  myListFilms: [],
  favouriteFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmByGenre, (state) => {
      state.filmsByGenre = (state.genre === 'All genres') ? state.films : state.films.filter((film) => film.genre === state.genre);
    })
    .addCase(showMoreFilms, (state) => {
      state.visibleFilmCount += 8;
    })
    .addCase(resetListFilms, (state) =>{
      state.visibleFilmCount = INITIAL_COUNT_FILMS;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsByGenre = state.films;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setIsLoadingStatus, (state, action) => {
      state.dataIsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getSimilarMovies, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setMyListFilms, (state, action) => {
      state.myListFilms = action.payload;
    });
});

export { reducer };
