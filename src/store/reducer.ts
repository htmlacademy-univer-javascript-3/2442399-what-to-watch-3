import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, INITIAL_COUNT_FILMS, INITIAL_GENRE } from '../const';
import { changeGenre, filterFilmByGenre, resetListFilms, setIsLoadingStatus, showMoreFilms, loadFilms, requireAuthorization } from './action';


const initialState = {
  genre: INITIAL_GENRE,
  films: [],
  visibleFilmCount: INITIAL_COUNT_FILMS,
  filmsByGenre: [],
  dataIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    .addCase(setIsLoadingStatus, (state, action) => {
      state.dataIsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      console.log(action.payload);
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
