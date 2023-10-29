import Rating from "../rating/rating";
import { AddReviewPageProps } from "../../pages/add-review-page/add-review-page";
import { useState } from "react";

type AddReviewFormProps = AddReviewPageProps;

function AddReviewForm(props: AddReviewFormProps): JSX.Element {
    const [rating, setRating] = useState(3);
    const [text, setText] = useState('');

    return (
        <div className="add-review">
            <form action="#" className="add-review__form">
                <Rating setRating={setRating} rating={rating} />;

                <div className="add-review__text">
                    <textarea
                        className="add-review__textarea"
                        name="review-text"
                        id="review-text"
                        placeholder="Review text"
                        onChange={(event) => {
                            setText(event.target.innerText);
                        }
                        }
                    />
                    <div className="add-review__submit">
                        <button className="add-review__btn" type="submit">
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddReviewForm;