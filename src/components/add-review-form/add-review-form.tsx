import Rating from '../rating/rating';
import { useState } from 'react';


function AddReviewForm(): JSX.Element {
  const [, setRating] = useState(3);
  const [, setText] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating setRating={setRating} />;

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={(event) => {
              setText(event.target.innerText);
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
