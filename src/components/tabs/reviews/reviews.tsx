import { ReviewBlock } from './review-block/review-block';
import { useAppSelector } from '../../../hooks';

export function Reviews(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / 2)).map((review) => <ReviewBlock key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / 2) , reviews.length).map((review) => <ReviewBlock key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
