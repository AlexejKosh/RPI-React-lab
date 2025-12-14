import React from 'react';
import type { Review as ReviewType } from '../../types/review';
import { Review } from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({ reviews }: ReviewsListProps): React.JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((r) => (
          <Review key={r.id} review={r} />
        ))}
      </ul>
    </>
  );
}

export { ReviewsList };
