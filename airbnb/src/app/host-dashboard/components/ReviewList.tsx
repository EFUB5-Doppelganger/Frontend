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

interface ReviewItemType {
  reviewId: number;
  reviewerName: string;
  score: number;
  content: string;
  createdAt: string;
}

interface ReviewListProps {
  reviews: ReviewItemType[];
  averageRating: number;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, averageRating }) => {
  return (
    <>
      <ReviewTitle>후기</ReviewTitle>

      <RatingCards>
        <RatingCard>
          <RatingLabel>전체 평점</RatingLabel>
          <RatingValue>{averageRating.toFixed(2)} ★</RatingValue>
        </RatingCard>
        <RatingCard>
          <RatingLabel>청결도</RatingLabel>
          <RatingValue>{averageRating.toFixed(2)} ★</RatingValue> {/* 임시 */}
        </RatingCard>
      </RatingCards>

      <ReviewListWrapper>
        {reviews.map((review) => (
          <ReviewItem key={review.reviewId}>
            <ReviewHeader>
              <Avatar>{review.reviewerName.charAt(0)}</Avatar>
              <ReviewMeta>
                <ReviewName>{review.reviewerName}</ReviewName>
                <ReviewDate>{review.createdAt}</ReviewDate>
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
