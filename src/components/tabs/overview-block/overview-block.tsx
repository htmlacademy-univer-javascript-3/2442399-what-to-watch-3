import { Overview } from '../../../const';

type OverviewProps = {
  overview: Overview;
}

export function OverviewBlock({ overview }: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{overview?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        {overview?.description}
        <p className="film-card__director">
          <strong>Director: {overview?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {overview?.actors}
          </strong>
        </p>
      </div>
    </>
  );
}

export default OverviewBlock;
