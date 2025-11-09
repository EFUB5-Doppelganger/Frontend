import React from 'react';
import styled from 'styled-components';
import HotelCard from './hotelCard';
import { cards, Props } from './cards';

export default function HotelCardList () {
  return (
    <Wrapper>
      {cards.map(({ image, name, score }, index) => (
        <HotelCard 
          key={index}
          image={image}
          name={name}
          score={score}
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