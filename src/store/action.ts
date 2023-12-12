import {createAction} from '@reduxjs/toolkit';
import { Genre } from '../const';

export const changeGenre = createAction<Genre>('genre/change');

export const filterFilmByGenre = createAction('genre/films');
