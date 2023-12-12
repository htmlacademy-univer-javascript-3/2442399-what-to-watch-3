import { Review } from '../../../../const';

type ReviewBlockProps = {
  review: Review;
}

export function ReviewBlock({ review }: ReviewBlockProps): JSX.Element {
  return (
    <div className="review" key={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">
          {review?.text}
        </p>
        <footer className="review__details">
          <cite className="review__author">{review?.name}</cite>
          <time className="review__date" dateTime="2016-12-20">
            {review?.date}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{review?.rating}</div>
    </div>
  );
}
