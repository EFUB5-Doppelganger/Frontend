import React, { useState } from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';
import { signUp, login } from "@/api/users";
import { useRouter } from 'next/navigation';

interface LoginBtnProps {
  loginMethod: string;
  userId: string;
  userPw: string;
}

const inter = Inter({ subsets: ['latin'], weight: '300' })

// 소셜 로그인 - API 호출 없이 직접 리다이렉트
export function socialLogin() {
  window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;
}

export default function loginBtn ({ loginMethod, userId, userPw }: LoginBtnProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleGeneralAuth = async () => {
    // 입력 검증
    if (!userId.trim() || !userPw.trim()) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);

    // 일반 로그인/회원가입 처리
    try {
      const signUpRes  = await signUp({
        email: userId, 
        password: userPw
      });
      console.log("회원가입 성공: ", signUpRes);

      // 회원가입 후 자동 로그인
      const loginRes = await login({
        email: userId,
        password: userPw,
      });

      if (loginRes.accessToken) {
        // 토큰 저장 
        localStorage.setItem('accessToken', loginRes.accessToken);
        console.log("자동 로그인 성공: ", loginRes);

        // 메인 페이지 이동
        router.push('/');
      }
    } catch (error) {
      console.error("회원가입 오류: ", error);
      // 회원가입 실패 시 로그인 시도 
      try {
        const loginRes = await login({
          email: userId,
          password: userPw,
        });
        console.log("로그인 성공!");
        console.log("로그인 res: ", loginRes);

        if (loginRes.accessToken) {
          localStorage.setItem('accessToken', loginRes.accessToken);
          console.log("로그인 성공:", loginRes);
          router.push('/');

        }
      } catch (error) {
        console.error("로그인 오류: ", error);
      } 
    } finally {
      setIsLoading(false);
    }
  };

  // 소셜 로그인
  const handleSocialLogin = () => {
    localStorage.setItem('redirectAfterLogin', '/');
    socialLogin();
  }

  // 버튼 클릭 핸들러
  const handleClick = () => {
    switch (loginMethod) {
      case "계속":
        handleGeneralAuth();
        break;
      default: 
        handleSocialLogin();
    }
  };

  return (
    <Wrapper 
      $loginMethod={loginMethod}
      onClick={handleClick}
      disabled={isLoading}
    >
      <LoginText className={inter.className} $loginMethod={loginMethod}>
        {loginMethod === "계속" ?
          "계속":
          `${loginMethod}로 로그인하기`}
      </LoginText>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ $loginMethod: string }>`
  width: 35rem;
  height: 3.09194rem;
  flex-shrink: 0;
  fill: #FFF;
  stroke-width: 1px;
  stroke: #3E3E3E;
  border: ${({ $loginMethod }) => ($loginMethod === "계속" ? "1px solid #FF385C" : "1px solid #3e3e3e")};
  border-radius: 0.7rem;
  background: ${({ $loginMethod }) => ($loginMethod === "계속" ? "#FF385C" : "#fff")};
`;

const LoginText = styled.div<{ $loginMethod: string }>`
  color: ${({ $loginMethod }) => ($loginMethod === "계속" ? "#FFF" : "#3e3e3e")};;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;