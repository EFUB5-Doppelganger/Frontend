// auth/kakao/callback/page.tsx
"use client"

import { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("=== 콜백 페이지 진입 ===");
    console.log("현재 URL:", window.location.href);
    console.log("모든 쿼리 파라미터:", Object.fromEntries(searchParams.entries()));
    
    const token = searchParams.get('token');
    const accessToken = searchParams.get('accessToken');
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    console.log("token:", token);
    console.log("accessToken:", accessToken);
    console.log("code:", code);
    console.log("error:", error);

    // 토큰이 다양한 이름으로 올 수 있으므로 확인
    const finalToken = token || accessToken;

    if (finalToken) {
      console.log("토큰 저장:", finalToken);
      localStorage.setItem('accessToken', finalToken);
      
      // 저장된 리다이렉트 경로 가져오기
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
      console.log("리다이렉트 경로:", redirectPath);
      localStorage.removeItem('redirectAfterLogin');
      
      router.push(redirectPath);
    } else if (code) {
      // 인가 코드만 있는 경우 - 백엔드에 토큰 요청 필요
      console.log("인가 코드 받음, 백엔드에 토큰 교환 필요");
      // 여기서 백엔드 API 호출
    } else if (error) {
      console.error("로그인 실패:", error);
      alert('로그인에 실패했습니다.');
      router.push('/signInUp');
    } else {
      console.log("토큰을 찾을 수 없음, 3초 후 로그인 페이지로 이동");
      setTimeout(() => {
        router.push('/signInUp');
      }, 3000);
    }
  }, [searchParams, router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div>로그인 처리 중...</div>
      <div style={{ fontSize: '0.875rem', color: '#666' }}>
        콘솔을 확인해주세요
      </div>
    </div>
  );
}