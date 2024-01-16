import { Overview } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { DescriptionRating } from '../../../const';

export function OverviewBlock(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{DescriptionRating[Math.ceil(film?.rating) / 2 - 1]}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {film?.description}
        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {film?.starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewBlock;
