import { createReducer } from '@reduxjs/toolkit';
import { INITIAL_GENRE } from '../const';
import { FilterFilm } from '../genre';
import { changeGenre, filterFilmByGenre } from './action';
import { films } from '../mocks/films';

const initialState = {
  genre: INITIAL_GENRE,
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  })
    .addCase(filterFilmByGenre, (state) => {
      state.films = FilterFilm(state.genre);
    });
});

export { reducer };
