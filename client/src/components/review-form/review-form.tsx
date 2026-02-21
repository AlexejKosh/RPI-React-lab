import React, { useState } from 'react';

type ReviewFormProps = {
  onAddReview: (comment: string, rating: number) => void;
}

function ReviewForm({ onAddReview }: ReviewFormProps): React.JSX.Element {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState('');

  const isValid = rating !== null && text.trim().length >= 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || rating === null) {
      return;
    }
    onAddReview(text.trim(), rating);
    setRating(null);
    setText('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5,4,3,2,1].map((r) => (
          <React.Fragment key={r}>
            <input className="form__rating-input visually-hidden" name="rating" value={String(r)} id={`${r}-stars`} type="radio" checked={rating === r} onChange={() => setRating(r)} />
            <label htmlFor={`${r}-stars`} className="reviews__rating-label form__rating-label" title={r === 5 ? 'perfect' : r === 4 ? 'good' : r === 3 ? 'not bad' : r === 2 ? 'badly' : 'terribly'}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="/img/sprite.svg#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={text} onChange={(e) => setText(e.target.value)} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export { ReviewForm };
