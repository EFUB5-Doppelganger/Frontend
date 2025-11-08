import React from 'react';
import {
  PropertyCardWrapper,
  ImageContainer,
  PropertyImage,
  HeartIcon,
  DotIndicators,
  Dot,
  PropertyInfo,
  PropertyLocation,
  Rating,
  PropertyDistance,
  PropertyDate,
  PropertyPrice,
  PriceUnit
} from '../HostDashboardPage.styles';

const PropertyCard: React.FC = () => {
  return (
    <PropertyCardWrapper>
      <ImageContainer>
        <PropertyImage src="/property-image.jpg" alt="숙소 이미지" />
        <HeartIcon>♡</HeartIcon>
        <DotIndicators>
          <Dot active />
          <Dot />
          <Dot />
        </DotIndicators>
      </ImageContainer>

      <PropertyInfo>
        <PropertyLocation>Lovina Seririt, Indonesia</PropertyLocation>
        <Rating>★ 4.89</Rating>
      </PropertyInfo>

      <PropertyDistance>53 kilometers away</PropertyDistance>
      <PropertyDate>May 6 - 11</PropertyDate>
      <PropertyPrice>
        Rp2,932,910 <PriceUnit>/night</PriceUnit>
      </PropertyPrice>
    </PropertyCardWrapper>
  );
};

export default PropertyCard;
