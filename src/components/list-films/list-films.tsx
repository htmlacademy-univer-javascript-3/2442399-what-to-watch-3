import { Film, FilmShortInfo } from '../../const';
import FilmCard from '../film-card/film-card';

type ListFilmsProps = {
    films: FilmShortInfo[];
}

function ListFilms({films}: ListFilmsProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {
        films?.map((film) => (
          <FilmCard key={`card ${film.id}`} film={film} />
        ))
      }
    </div>
  );
}

export default ListFilms;
