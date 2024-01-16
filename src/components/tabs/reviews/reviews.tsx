import { ReviewBlock } from './review-block/review-block';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useEffect } from 'react';
import { loadReviewsByID } from '../../../store/api-actions';

export function Reviews(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const reviews = useAppSelector((state) => state.reviews);
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(loadReviewsByID(film.id));
  }, [dispatch, film.id]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews?.slice(0, reviews.length / 2).map((review) => <React.Fragment key={review.id}><ReviewBlock review={review}/></React.Fragment>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews?.slice(0, reviews.length / 2).map((review) => <ReviewBlock review={review}/>)}
      </div>
    </div>
  );
}
