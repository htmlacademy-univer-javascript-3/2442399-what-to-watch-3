import { Review } from '../../../const';
import { ReviewBlock } from './review-block/review-block';
import { useAppSelector } from '../../../hooks';

export function Reviews(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const reviews = useAppSelector((state) => state.reviews);
  
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews?.slice(0, reviews.length / 2).map((review) => <ReviewBlock review={review} key={review.id} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviews?.slice(0, reviews.length / 2).map((review) => <ReviewBlock review={review} key={review?.id}/>)}
      </div>
    </div>
  );
}
