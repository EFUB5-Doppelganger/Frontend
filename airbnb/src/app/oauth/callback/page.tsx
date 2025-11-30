// app/oauth/callback/page.tsx
"use client"

import { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';

export default function OAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("=== OAuth 콜백 페이지 진입 ===");
    console.log("현재 URL:", window.location.href);
    
    const token = searchParams.get('token');
    console.log("받은 토큰:", token);

    if (token) {
      // 1. 토큰 저장
      localStorage.setItem('accessToken', token);
      console.log("토큰 저장 완료");
      
      // 2. 저장된 리다이렉트 경로 가져오기
      const redirectPath = localStorage.getItem('redirectAfterLogin') || '/';
      console.log("리다이렉트 경로:", redirectPath);
      localStorage.removeItem('redirectAfterLogin');
      
      // 3. 홈으로 이동
      router.push(redirectPath);
    } else {
      console.error("토큰을 찾을 수 없음");
      alert('로그인에 실패했습니다.');
      router.push('/signInUp');
    }
  }, [searchParams, router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '1.2rem'
    }}>
      로그인 처리 중...
    </div>
  );
}