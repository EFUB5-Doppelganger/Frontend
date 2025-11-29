import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelCard from './hotelCard';
import {
  getAccommodationCardRecent,
  getAccommodationCardRating,
  AccommodationCard
} from "@/api/acoommodations";
import { access } from 'fs';

type Props = {
  sortBy: 'createdAt' | 'rating';
}

export default function HotelCardList ({ sortBy }: Props) {
  const [cards, setCards] = useState<AccommodationCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAccessToken = () => {
    if (typeof window != 'undefined') {
      return localStorage.getItem('accessToken') || '';
    }
    return '';
  };

  const accessToken = getAccessToken();

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = sortBy === 'createdAt'
          ? await getAccommodationCardRecent()
          : await getAccommodationCardRating();
        
        setCards(response.accommodations);
      } catch (err) {
        console.error('숙소 목록 조회 실패: ', err);
        setError('숙소 목록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAccommodations();
  }, [sortBy]);

  if (loading) {
    return (
      <Wrapper>
        <LoadingText>로딩 중...</LoadingText>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {cards.map((card) => (
        <HotelCard 
          key={card.id}
          id={card.id}
          image={card.image}
          name={card.name}
          rating={card.rating}
          location={card.location}
          price={card.price}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.88rem;
`;

const LoadingText = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.25rem;
  color: #979797;
  padding: 2rem;
`;

const ErrorText = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.25rem;
  color: #ff385c;
  padding: 2rem;
`;