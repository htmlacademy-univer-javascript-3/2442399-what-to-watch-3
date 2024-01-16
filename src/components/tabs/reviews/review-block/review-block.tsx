import { Review } from '../../../../const';

type ReviewBlockProps = {
  review: Review;
}

export function ReviewBlock({ review }: ReviewBlockProps): JSX.Element {
  return (
    <div className="review" key={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">
          {review?.comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{review?.user}</cite>
          <time className="review__date" dateTime={review?.date}>
            {new Date(review?.date).toDateString()}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review?.rating}</div>
    </div>
  );
}
