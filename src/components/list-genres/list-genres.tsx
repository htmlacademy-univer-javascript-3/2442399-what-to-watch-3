import { genres } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterFilmByGenre, resetListFilms } from '../../store/action';
import { Genre } from '../../const';

function ListGenres(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);

  const handleOnClick = (genre: Genre) =>{
    dispatch(resetListFilms());
    dispatch(changeGenre(genre));
    dispatch(filterFilmByGenre());
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li className={`catalog__genres-item ${ genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}
              onClick={() => handleOnClick(genre)} key={genre}
            >
              <a className="catalog__genres-link">
                {genre}
              </a>
            </li>
          ))
      }
    </ul >
  );
}

export default ListGenres;
