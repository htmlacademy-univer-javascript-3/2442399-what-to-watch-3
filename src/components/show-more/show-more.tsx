import { showMoreFilms } from '../../store/action';
import { useAppDispatch } from '../../hooks';

export function ShowMore() {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(showMoreFilms());
  };
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleOnClick}>
                Show more
      </button>
    </div>
  );
}
