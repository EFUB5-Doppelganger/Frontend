import React from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '300' });

type Props = {
  userId: string;
  userPw: string;
  onIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPwChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function loginIdPw ({ userId, userPw, onIdChange, onPwChange }: Props) {

  return (
    <Wrapper>
      <TextBox>
        <EnterBox 
          placeholder="아이디를 입력하세요" 
          className={inter.className} 
          value={userId}
          onChange={onIdChange}
        />
      </TextBox>
      <Line />
      <TextBox>
        <EnterBox 
          placeholder="비밀번호를 입력하세요" 
          type="password" 
          className={inter.className} 
          value={userPw} 
          onChange={onPwChange}
        />
      </TextBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 35rem;
  height: 7.0855rem;
  flex-shrink: 0;
  fill: #FFF;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
`;

const TextBox = styled.div`
  height: 3.56rem;
  width: 35rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
`;

const Line = styled.div`
  width: 35rem;
  height: 0.0625rem;
  background: #3E3E3E;
`

const EnterBox = styled.input`
  ::placeholder {
    color: #DBDBDB;
    font-size: 1rem;
    font-style: normal;
    line-height: normal;
  }
  outline: none;
  border: none;
  width: 30rem;
`;