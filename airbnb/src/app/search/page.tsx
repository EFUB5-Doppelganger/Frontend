'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { Poppins, Inter } from 'next/font/google';
import { getAccommodationSearch, Accommodations } from '@/api/acoommodations';
import HotelCard from '@/app/home/components/hotelCard'; // 기존 HotelCard 컴포넌트 사용

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700'] });

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  
  const [accommodations, setAccommodations] = useState<Accommodations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const response = await getAccommodationSearch(query);
        setAccommodations(response.accommodations);
        console.log('검색 결과:', response.accommodations);
      } catch (err) {
        console.error('검색 실패:', err);
        setError('검색 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return (
      <Container>
        <LoadingText className={inter.className}>검색 중...</LoadingText>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText className={inter.className}>{error}</ErrorText>
      </Container>
    );
  }

  if (!query) {
    return (
      <Container>
        <EmptyText className={inter.className}>
          검색어를 입력해주세요.
        </EmptyText>
      </Container>
    );
  }

  return (
    <Container>
      <SearchHeader>
        <SearchTitle className={poppins.className}>
          '{query}' 검색 결과
        </SearchTitle>
        <ResultCount className={inter.className}>
          {accommodations.length}개의 숙소
        </ResultCount>
      </SearchHeader>

      {accommodations.length === 0 ? (
        <EmptyState>
          <EmptyText className={inter.className}>
            검색 결과가 없습니다.
          </EmptyText>
          <EmptySubText className={inter.className}>
            다른 검색어로 시도해보세요.
          </EmptySubText>
        </EmptyState>
      ) : (
        <ResultsGrid>
          {accommodations.map((accommodation) => (
            <HotelCard
              key={accommodation.id}
              id={accommodation.id.toString()}
              image={"/hotel/hotel1.svg"}
              name={accommodation.name}
              rating={parseFloat(accommodation.rating)}
              location={accommodation.location}
              price={accommodation.price}
            />
          ))}
        </ResultsGrid>
      )}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
`;

const SearchHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
`;

const SearchTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #3e3e3e;
  margin: 0 0 0.5rem 0;
`;

const ResultCount = styled.p`
  font-size: 1rem;
  color: #707070;
  margin: 0;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
`;

const EmptyText = styled.div`
  font-size: 1.25rem;
  color: #3e3e3e;
  text-align: center;
`;

const EmptySubText = styled.div`
  font-size: 1rem;
  color: #979797;
  text-align: center;
`;

const LoadingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  font-size: 1.25rem;
  color: #979797;
`;

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  font-size: 1.25rem;
  color: #ff385c;
`;