import styled from 'styled-components';

// 기본 레이아웃
export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #3E3E3E;
  margin-bottom: 32px;
`;

// TabBar
export const TabContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${props => props.active ? '#000' : '#B8B8B8'};
  background-color: ${props => props.active ? '#FFF' : 'transparent'};
  color: ${props => props.active ? '#000' : '#6D6D6D'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #000;
  }
`;

// PropertyCard
export const PropertyCardWrapper = styled.div`
   min-width: 380px;
   max-width: 380px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeartIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 18px;
  cursor: pointer;
`;

export const DotIndicators = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

export const Dot = styled.div<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#FFF' : 'rgba(255, 255, 255, 0.45)'};
`;

export const PropertyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const PropertyLocation = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #3E3E3E;
`;

export const Rating = styled.div`
  font-size: 14px;
  color: #3E3E3E;
`;

export const PropertyDistance = styled.div`
  font-size: 14px;
  color: #9C9C9C;
  margin-bottom: 2px;
`;

export const PropertyDate = styled.div`
  font-size: 14px;
  color: #707070;
  margin-bottom: 8px;
`;

export const PropertyPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #3E3E3E;
`;

export const PriceUnit = styled.span`
  font-weight: 400;
  color: #6D6D6D;
`;

// ReviewList
export const ReviewTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #3E3E3E;
  margin-bottom: 32px;
`;

export const RatingCards = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;

export const RatingCard = styled.div`
  flex: 1;
  max-width: 240px;
  padding: 24px;
  background-color: #F7F7F7;
  border-radius: 12px;
  text-align: center;
`;

export const RatingLabel = styled.div`
  font-size: 14px;
  color: #6D6D6D;
  margin-bottom: 8px;
`;

export const RatingValue = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #000;
`;

export const ReviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ReviewItem = styled.div`
  padding-bottom: 32px;
  border-bottom: 1px solid #F4F3F3;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const ReviewMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #3E3E3E;
`;

export const ReviewDate = styled.div`
  font-size: 14px;
  color: #9C9C9C;
`;

export const ReviewContent = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #3E3E3E;
  white-space: pre-line;
`;

// ReservationCard
export const ReservationCardWrapper = styled.div`
  max-width: 320px;
  padding: 24px;
  border: 1px solid #B8B8B8;
  border-radius: 12px;
`;

export const ReservationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const HostAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const BadgeText = styled.span`
  font-size: 13px;
  color: #6D6D6D;
`;

export const ReservationTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #3E3E3E;
  margin-bottom: 4px;
`;

export const ReservationDates = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #3E3E3E;
  margin-bottom: 8px;
`;

export const ReservationTags = styled.div`
  font-size: 13px;
  color: #9C9C9C;
  margin-bottom: 20px;
`;

export const SendMessageButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #F7F7F7;
  }
`;
export const PropertyCardsContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 12px 0;
  margin-bottom: 40px;

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;

    &:hover {
      background: #555;
    }
  }
`;
