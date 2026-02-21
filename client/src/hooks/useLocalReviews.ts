import { useState, useEffect } from "react";
import type { Review } from "../types/review";

export const useLocalReviews = (initialReviews: Review[]) => {
  const [localReviews, setLocalReviews] = useState<Review[]>(initialReviews);

  useEffect(() => {
    setLocalReviews(initialReviews || []);
  }, [initialReviews]);

  const addReview = (comment: string, rating: number) => {
    const newReview: Review = {
      id: String(Date.now()),
      date: new Date().toISOString(),
      user: {
        name: 'You',
        avatarUrl: '/img/avatar-user.jpg',
        isPro: false,
      },
      comment,
      rating,
    };
    setLocalReviews((prev) => [newReview, ...prev]);
  };

  return { localReviews, addReview } as const;
};
