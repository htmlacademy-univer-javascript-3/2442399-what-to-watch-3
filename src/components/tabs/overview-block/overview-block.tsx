import { useAppSelector } from '../../../hooks';
import { DescriptionRating } from '../../../const';
import { Spinner } from '../../spinner/spinner';

export function OverviewBlock(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const findDescriptionRating = (rating: number) =>{
    if (rating < 3) {
      return DescriptionRating.Bad;
    } else if (rating < 5) {
      return DescriptionRating.Normal;
    } else if (rating < 8) {
      return DescriptionRating.Good;
    } else if (rating < 10) {
      return DescriptionRating.VeryGood;
    } else {
      return DescriptionRating.Awesome;
    }
  };

  if (!film){
    return <Spinner/>;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{findDescriptionRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film?.description}
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {film.starring?.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewBlock;
