import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { reviews, Props } from './reviewContent';
import Review from '@/app/common/review';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function Reviews () {
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

      <ReviewContainer>
        {reviews.map(({ profileImage, userName, writeDate, review }, index) => (
          <Review
            key={index}
            profileImage={profileImage}
            userName={userName}
            writeDate={writeDate}
            review={review}
          />
        ))}
      </ReviewContainer>
      <MoreBtn className={poppins.className}>후기 1783개 모두 보기</MoreBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
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
  right: 42rem;
  bottom: 8.5rem;
  background: #fff;

  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;