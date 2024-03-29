import React from 'react';
import BookReview from './BookReview';
import { reviews } from '../../../data/dummyData/homeDummy';

const BookReviewList = () => {
  return (
    <div>
      {reviews.map((reviewData) => (
        <BookReview key={reviewData.id} reviewData={reviewData} />
      ))}
    </div>
  );
};

export default BookReviewList;
