import { Review } from '../../../const';
import { ReviewBlock } from './review-block/review-block';
type ReviewsProps = {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps): JSX.Element {
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
