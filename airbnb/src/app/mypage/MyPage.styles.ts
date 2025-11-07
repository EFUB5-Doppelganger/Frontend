// Profile.styles.ts
import styled from 'styled-components';

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEditing',
})<{ isEditing?: boolean }>`
  display: flex;
  min-height: 100vh;
  background-color: #FFFFFF;
  justify-content: ${({ isEditing }) => (isEditing ? 'center' : 'flex-start')};
`;

export const Sidebar = styled.div`
  width: 280px;
  padding: 40px 24px;
  border-right: 1px solid #D9D9D9;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? '#F7F7F7' : 'transparent')};

  &:hover {
    background-color: #F7F7F7;
  }

  span {
    font-size: 20px;
    font-weight: ${({ $active }) => ($active ? '600' : '400')};
    color: #000;
  }
`;

export const IconCircle = styled.div<{ $active: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#3E3E3E' : '#000')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  span {
    color: white;
  }
`;


export const MainContent = styled.div`
  padding: 40px 80px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

export const HeaderTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #000000;
`;

export const EditBadge = styled.span`
  padding: 6px 12px;
  background-color: #F7F7F7;
  border-radius: 4px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #EEEEEE;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 56px;
  align-items: flex-start;
`;

export const ProfileCard = styled.div`
  width: 360px;
  background-color: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  padding: 30px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3E3E3E;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 48px;
  font-weight: 600;
`;

export const ProfileName = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0px;
`;

export const ProfileLabel = styled.p`
  font-size: 20px;
  color: #707070;
`;

export const InfoSection = styled.div`
  flex: 1;
`;

export const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 16px;
`;

export const InfoDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #707070;
  margin-bottom: 32px;
`;

export const StartButton = styled.button`
  padding: 14px 32px;
  background-color: #FF385C;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E31C5F;
  }
`;

export const Footer = styled.div`
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #D9D9D9;
`;

export const FooterLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #707070;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const LinkIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #D9D9D9;
`;



export const ProfileAvatarSmall = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #3E3E3E;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 72px;
  font-weight: 600;
  position: relative;
`;


export const CameraBadge = styled.div`
  position: absolute;
  bottom: -10px; 
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFFFFF;
  border: 1px solid #3E3E3E;
  border-radius: 20px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;

  &:hover {
    background-color: #F7F7F7;
  }
`;

export const CameraIcon = styled.span`
  color: black;
`;

export const EditView = styled.div`
  max-width: 1000px;
`;


export const EditHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 64px;
`;

export const ProfileInfoSection = styled.div`
  margin-bottom: 64px;
`;

export const SectionTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 24px;
`;


export const InfoText = styled.p`
  font-size: 19px;
  line-height: 1.6;
  color: #707070;
  margin-bottom: 40px;
`;


export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 48px;
`;


export const InfoLabel = styled.label`
  font-size: 16px;
  color: #B8B8B8;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const InfoInput = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  border-bottom: 1px solid #D9D9D9;
  font-size: 16px;
  color: #000000;
  background: transparent;
  outline: none;
  padding-bottom: 8px;

  &:focus {
    border-bottom-color: #000000;
  }

  &::placeholder {
    color: #D5D5D5;
  }
`;

export const TextAreaWrapper = styled.div`
  position: relative;
`;


export const TextArea = styled.textarea`
  width: 95%;
  min-height: 200px;
  padding: 20px;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  line-height: 1.6;
  color: #000000;

  &:focus {
    outline: none;
    border-color: #000000;
  }

  &::placeholder {
    color: #B8B8B8;
    white-space: pre-line;
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
`;


export const CompleteButton = styled.button`
  padding: 14px 28px;
  background-color: #3E3E3E;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #000000;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #979797;
  margin-bottom: 8px;
`;

export const IntroSection = styled.div`
  margin-bottom: 48px;
`;