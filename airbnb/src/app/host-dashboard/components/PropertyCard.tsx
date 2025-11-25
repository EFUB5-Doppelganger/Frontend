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

interface Photo {
  url: string;
  displayOrder: number;
}

interface PropertyCardProps {
  name: string;
  dailyPrice: number;
  rating: number;
  photos: Photo[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  dailyPrice,
  rating,
  photos
}) => {
  return (
    <PropertyCardWrapper>
      <ImageContainer>
        <PropertyImage src={photos?.[0]?.url || "/default-image.jpg"} alt="숙소 이미지" />
        <HeartIcon>♡</HeartIcon>
        <DotIndicators>
          <Dot active />
          <Dot />
          <Dot />
        </DotIndicators>
      </ImageContainer>

      <PropertyInfo>
        <PropertyLocation>{name}</PropertyLocation>
        <Rating>★ {rating.toFixed(2)}</Rating>
      </PropertyInfo>

      <PropertyDistance>53 kilometers away</PropertyDistance>
      <PropertyDate>May 6 - 11</PropertyDate>
      <PropertyPrice>
        Rp{dailyPrice.toLocaleString()} <PriceUnit>/night</PriceUnit>
      </PropertyPrice>
    </PropertyCardWrapper>
  );
};

export default PropertyCard;
