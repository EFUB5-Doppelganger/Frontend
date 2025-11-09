import React from 'react';
import {
  ReviewTitle,
  RatingCards,
  RatingCard,
  RatingLabel,
  RatingValue,
  ReviewListWrapper,
  ReviewItem,
  ReviewHeader,
  Avatar,
  ReviewMeta,
  ReviewName,
  ReviewDate,
  ReviewContent
} from '../HostDashboardPage.styles';

import { Review } from '../types/host.d';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <>
      <ReviewTitle>후기</ReviewTitle>

      <RatingCards>
        <RatingCard>
          <RatingLabel>전체 평점</RatingLabel>
          <RatingValue>4.88 ★</RatingValue>
        </RatingCard>
        <RatingCard>
          <RatingLabel>청결도</RatingLabel>
          <RatingValue>4.88 ★</RatingValue>
        </RatingCard>
      </RatingCards>

      <ReviewListWrapper>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewHeader>
              <Avatar>{review.avatar}</Avatar>
              <ReviewMeta>
                <ReviewName>{review.name}</ReviewName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewMeta>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewListWrapper>
    </>
  );
};

export default ReviewList;
