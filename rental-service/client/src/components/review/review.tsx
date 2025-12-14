import React from 'react';
import type { Review as ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
};

function Review({ review }: ReviewProps): React.JSX.Element {
  const date = new Date(review.date);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const dateTime = review.date;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(review.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{`${month} ${year}`}</time>
      </div>
    </li>
  );
}

export { Review };
