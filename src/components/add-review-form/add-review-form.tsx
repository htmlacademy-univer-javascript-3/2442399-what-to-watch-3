import { useState } from 'react';
import { addFilmReview } from '../../store/api-actions';
import { useNavigate, useParams } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function AddReviewForm(): JSX.Element {
  const { id } = useParams();
  const [rating, setRating] = useState(3);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  if (!id) {
    return <NotFoundPage/>;
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text && text.length > 50 && text.length < 400) {
      addFilmReview({
        id,
        comment: text,
        rating: rating
      });
      navigate(`/films/${id}`);
    }
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              id="star-10"
              type="radio"
              name="rating"
              onClick={() => setRating(10)}
              defaultValue={10}
            />
            <label className="rating__label" htmlFor="star-10">
              Rating 10
            </label>
            <input
              className="rating__input"
              id="star-9"
              type="radio"
              name="rating"
              onClick={() => setRating(9)}
              defaultValue={9}
            />
            <label className="rating__label" htmlFor="star-9">
              Rating 9
            </label>
            <input
              className="rating__input"
              id="star-8"
              type="radio"
              name="rating"
              onClick={() => setRating(8)}
              defaultValue={8}
            />
            <label className="rating__label" htmlFor="star-8">
              Rating 8
            </label>
            <input
              className="rating__input"
              id="star-7"
              type="radio"
              name="rating"
              onClick={() => setRating(7)}
              defaultValue={7}
            />
            <label className="rating__label" htmlFor="star-7">
              Rating 7
            </label>
            <input
              className="rating__input"
              id="star-6"
              type="radio"
              name="rating"
              onClick={() => setRating(6)}
              defaultValue={6}
            />
            <label className="rating__label" htmlFor="star-6">
              Rating 6
            </label>
            <input
              className="rating__input"
              id="star-5"
              type="radio"
              name="rating"
              onClick={() => setRating(5)}
              defaultValue={5}
            />
            <label className="rating__label" htmlFor="star-5">
              Rating 5
            </label>
            <input
              className="rating__input"
              id="star-4"
              type="radio"
              name="rating"
              onClick={() => setRating(4)}
              defaultValue={4}
            />
            <label className="rating__label" htmlFor="star-4">
              Rating 4
            </label>
            <input
              className="rating__input"
              id="star-3"
              type="radio"
              name="rating"
              onClick={() => setRating(3)}
              defaultValue={3}
            />
            <label className="rating__label" htmlFor="star-3">
              Rating 3
            </label>
            <input
              className="rating__input"
              id="star-2"
              type="radio"
              name="rating"
              onClick={() => setRating(2)}
              defaultValue={2}
            />
            <label className="rating__label" htmlFor="star-2">
              Rating 2
            </label>
            <input
              className="rating__input"
              id="star-1"
              type="radio"
              name="rating"
              onClick={() => setRating(1)}
              defaultValue={1}
            />
            <label className="rating__label" htmlFor="star-1">
              Rating 1
            </label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
