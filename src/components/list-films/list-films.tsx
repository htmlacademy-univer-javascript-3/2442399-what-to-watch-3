import { Film } from '../../const';
import FilmCard from '../film-card/film-card';

type ListFilmsProps = {
    films: Film[];
}

function ListFilms({films}: ListFilmsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films?.map((film) => (
          <FilmCard key={`card ${film.id}`} id={film.id} imagePath={film.previewImage}
            name={film.name} genre={film.genre} yearRelease={film.released} video={film.movie}
          />
        ))
      }
    </div>
  );
}

export default ListFilms;
