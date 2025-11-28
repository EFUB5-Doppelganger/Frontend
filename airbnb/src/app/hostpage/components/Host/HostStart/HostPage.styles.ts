import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 80px 120px;

  @media (max-width: 768px) {
    padding: 40px 24px 80px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  line-height: 1.2;
  color: #222222;
  margin: 0 0 60px 0;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  margin: 0;
`;
export const InfoDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: #717171;
  margin: 0;
`;


export const StartButton = styled.button`
  background: linear-gradient(to right, #e61e4d 0%, #d70466 100%);
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }
`;



