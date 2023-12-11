import { Film } from '../../mocks/films';
import FilmCard from '../film-card/film-card';

type ListFilmsProps = {
    films: Film[];
}

function ListFilms({films}: ListFilmsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films?.map((film) => (
          <FilmCard key={`card ${film.id}`} id={film.id} imagePath={film.imagePath}
            name={film.name} genre={film.genre} yearRelease={film.yearRelease} video={film.video}
          />
        ))
      }
    </div>
  );
}

export default ListFilms;
