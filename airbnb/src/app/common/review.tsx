/* 호출 방식
  <Review
    profileImage={
      <img src="/profile/profile1.svg" width={40} height={40} />
    }
    userName="지민"
    writeDate="2025년 8월"
    review="광안대교가 한눈에 보이는 뷰가 정말 압도적이에요. 특히 야경이 멋져서 숙소에 머무는 것만으로도 여행 온 기분이 제대로 납니다."
  />
*/

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

type Props = {
  profileImage: string;
  userName: string;
  writeDate: string;
  review: string;
};

export default function Review (props: Props) {
  return (
    <Wrapper>
      <ProfileContainer>
        <Image
          src={props.profileImage}
          alt="프로필 사진"
          width={40}
          height={40}
        />
        <UserInfo>
          <UserName className={poppins.className}>{props.userName}</UserName>
          <WriteDate className={poppins.className}>{props.writeDate}</WriteDate>
        </UserInfo>
      </ProfileContainer>
       <ReviewContent className={poppins.className}>{props.review}</ReviewContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.25rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3125rem;
`;

const UserName = styled.span`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const WriteDate = styled.span`
  color: #B8B8B8;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReviewContent = styled.p`
  width: 27.0625rem;
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0;
  margin: 0;
`;