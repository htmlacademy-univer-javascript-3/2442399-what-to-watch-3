import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_COUNT_FILMS, INITIAL_GENRE } from '../const';
import { changeGenre, filterFilmByGenre, resetListFilms, showMoreFilms } from './action';
import { films } from '../mocks/films';

const initialState = {
  genre: INITIAL_GENRE,
  films: films,
  visibleFilmCount: INITIAL_COUNT_FILMS,
  visibleFilms: films.slice(0, INITIAL_COUNT_FILMS)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(filterFilmByGenre, (state) => {
      switch (state.genre) {
        case 'All genres':
          state.films = films;
          state.visibleFilms = state.films.slice(0, state.visibleFilmCount);
          break;
        default:
          state.films = films.filter((film) => film.genre === state.genre);
          state.visibleFilms = state.films.slice(0, state.visibleFilmCount);
          break;
      }
    })
    .addCase(showMoreFilms, (state) => {
      state.visibleFilmCount += 8;
      state.visibleFilms = state.films.slice(0, state.visibleFilmCount);
    })
    .addCase(resetListFilms, (state) =>{
      state.visibleFilmCount = INITIAL_COUNT_FILMS;
    }
    );
});

export { reducer };
