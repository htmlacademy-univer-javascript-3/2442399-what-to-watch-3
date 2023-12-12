import { Film, Genre } from './const';
import { films } from './mocks/films';

export function FilterFilm(genre: Genre): Film[] {
  if (genre === 'All genres' as Genre) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}
