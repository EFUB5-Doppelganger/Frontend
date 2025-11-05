import React from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '300' });

export default function loginIdPw () {
  return (
    <Wrapper>
      <TextBox>
        <EnterBox placeholder="아이디를 입력하세요" className={inter.className} />
      </TextBox>
      <TextBox>
        <EnterBox placeholder="비밀번호를 입력하세요" className={inter.className} />
      </TextBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 43rem;
  height: 9.0855rem;
  flex-shrink: 0;
  fill: #FFF;
  border: 1px solid #3e3e3e;
  border-radius: 12px;
`;

const TextBox = styled.div`
  height: 4.56rem;
  width: 40rem;
  border-bottom: 1px solid #3e3e3e;
`;

const EnterBox = styled.input`
  ::placeholder {
    color: #DBDBDB;
    font-size: 1.25rem;
    font-style: normal;
    line-height: normal;
  }
`;