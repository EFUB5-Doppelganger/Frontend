import React from 'react';
import styled from 'styled-components';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

type Props = {
  profileImage: React.ReactElement;
  userName: string;
  writeDate: string;
  review: string;
};

export default function review (props: Props) {
  return (
    <Wrapper>
      <ProfileContainer>
        {props.profileImage}
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
  width: 35rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 2rem;
`;

const ProfileContainer = styled.div`
  width: 100vw;
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
`;