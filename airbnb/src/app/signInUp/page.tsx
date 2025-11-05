import React from 'react';
import styled from 'styled-components';
import { Inter, Poppins } from 'next/font/google';
import LoginIdPw  from './loginIdPw';
import LoginBtn from './loginBtn';

const inter = Inter({ subsets: ['latin'], weight: ['300', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: '600'});

export default function signInUP () {
  return (
    <Wrapper className={inter.className}>
      <LoginBox>
        <LoginHeader>
          <LoginHeaderText className={inter.className}>로그인 또는 회원가입</LoginHeaderText>
        </LoginHeader>
        <SignIn className={poppins.className}>
          <Info className={poppins.className}>에어비엔비에 오신 것을 환영합니다.</Info>
          <LoginIdPw />
          <Notice className={inter.className}>개인정보처리방침</Notice>
          <LoginBtn loginMethod="계속" />
        </SignIn>
        <DividerWithText>
          <span>또는</span>
        </DividerWithText>
        <SignInMethodContainer>
          <LoginBtn loginMethod="네이버" />
          <LoginBtn loginMethod="구글" />
          <LoginBtn loginMethod="이메일" />
        </SignInMethodContainer>
      </LoginBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 51.1875rem;
  height: 75.75rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid #000;
  background: #FFF;
`;

const LoginHeader = styled.h1`
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginHeaderText = styled.span`
  width: 11.625rem;
  height: 1.125rem;
  flex-shrink: 0;
  color: #3E3E3E;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = styled.h2`
  color: #3E3E3E;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Notice = styled.button`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: underline;
`;

const SignInMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 24px 0;

  span {
    color: #a2a2a2;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 16px;
    white-space: nowrap;
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1.5px solid #ededed;
  }

  &::before {
    margin-right: 8px;
  }
  &::after {
    margin-left: 8px;
  }
`;