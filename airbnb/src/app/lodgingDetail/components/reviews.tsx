import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Review from '@/app/common/review';
import { getReview, ReviewItem } from "@/api/reviews";
import { reviewSample } from '../reviewContent';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function Reviews () {
  const searchParams = useSearchParams();

  const [reviews, setReviews] = useState<ReviewItem[] | null>(null);
  const [totalReviews, setTotalReviews] = useState(0);
  const accommodationId = searchParams.get('accommodationId') || '';

  const fetchReviews = async () => {
    try {
      const res = await getReview(Number(accommodationId));
      setReviews(res.reviews);
      setTotalReviews(res.totalReviews);
    } catch (err) {
      console.error("리뷰 불러오기 실패: ", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);


  return (
    <Container>
      <Header>
        <Image
          src="/star.svg"
          alt="별점"
          width={25}
          height={25}
        />
        <Text className={poppins.className}>4.83</Text>
        <Text className={poppins.className}>•</Text>
        <Text className={poppins.className}>1,800 리뷰</Text>
      </Header>

      {reviews ? (
        <ReviewContainer>
          {reviews.slice(0, 7).map((review, index) => (
            <Review
              key={review.reviewId}
              profileImage={reviewSample[index % reviewSample.length]?.profileImage || '/default-avatar.png'}
              userName={review.reviewerName}
              writeDate={review.createdAt}
              review={review.content}
            />
          ))}
      </ReviewContainer>
      ) : (
        <div>로딩 중...</div>
      )}
      <MoreBtn className={poppins.className}>후기 {totalReviews}개 모두 보기</MoreBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 90%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.5rem;
`;

const Text = styled.span`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReviewContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 3.5rem;
`;

const MoreBtn = styled.button`
  display: flex;
  width: 15.625rem;
  height: 3.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  border: 1px solid #3E3E3E;
  position: absolute;
  right: 22rem;
  bottom: 3.5rem;
  background: #fff;

  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;