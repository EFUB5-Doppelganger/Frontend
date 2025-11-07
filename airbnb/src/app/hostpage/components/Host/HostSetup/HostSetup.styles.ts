import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 16px 120px;
`;

export const Header = styled.div`
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 8px 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  margin: 0;
`;

export const Section = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: 640px; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


export const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px 0;
`;

export const SectionSubtitle = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: #000000;
  margin: 16px 0 12px 0;
`;

export const SectionDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #707070;
  margin: 0 0 12px 0;
  line-height: 1.4;
`;

export const PropertyTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PropertyTypeCard = styled.button<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;
  border: ${props => props.selected ? '2px solid #000000' : '1px solid #DDDDDD'};
  border-radius: 12px;
  background: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000000;
  }
`;

export const PropertyIcon = styled.div`
  font-size: 36px;
  margin-bottom: 8px;
`;

export const PropertyLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
  box-sizing: border-box;

  &::placeholder {
    color: #707070;
  }

  &:focus {
    outline: none;
    border-color: #000000;
  }
`;

export const AmenityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AmenityCard = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: ${props => props.selected ? '2px solid #000000' : '1px solid #DDDDDD'};
  border-radius: 8px;
  background: #FFFFFF;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000000;
  }
`;

export const AmenityIcon = styled.span`
  font-size: 18px;
  flex-shrink: 0;
`;

export const AmenityText = styled.span`
  font-size: 12px;
  color: #000000;
  line-height: 1.3;
`;

export const UploadArea = styled.div`
  width: 85%;
  max-width: 450px;
  margin: 0 auto;
  padding: 48px 24px;
  border: 2px dashed #DDDDDD;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000000;
    background: #F7F7F7;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
`;

export const UploadButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 8px;
  background: #FFFFFF;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  max-width: 100%;
  &:hover {
    background: #F7F7F7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #707070;
  border-radius: 8px;
  font-size: 14px;
  color: #000000;
  box-sizing: border-box;
  font-family: inherit;
  resize: vertical;
  line-height: 1.5;

  &::placeholder {
    color: #707070;
  }

  &:focus {
    outline: none;
    border-color: #000000;
  }
`;

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const PriceCard = styled.div`
  padding: 20px 16px;
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  text-align: center;
`;

export const PriceLabel = styled.div`
  font-size: 12px;
  color: #000000;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const PriceAmount = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(to right, #D90964 0%, #FF385C 100%);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 12px rgba(217, 9, 100, 0.3);
  }

  &:active {
    transform: scale(0.99);
  }
`;