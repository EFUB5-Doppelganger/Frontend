import styled from 'styled-components';
import { InfoCard, InfoTitle, InfoDescription } from './HostPage.styles';

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const HostStartInfoList = () => {
  return (
    <RightSection>
      <InfoCard>
        <InfoTitle>숙소 정보를 알려주세요</InfoTitle>
        <InfoDescription>
          숙소 위치와 숙박 가능 인원 등 기본 정보를 알려주세요
        </InfoDescription>
      </InfoCard>

      <InfoCard>
        <InfoTitle>숙소를 돋보이게 하세요</InfoTitle>
        <InfoDescription>
          사진을 1장 이상 제출하고 제목과 설명을 추가해주시면<br />
          숙소가 돋보일 수 있도록 도와드릴게요
        </InfoDescription>
      </InfoCard>

      <InfoCard>
        <InfoTitle>등록을 완료하세요</InfoTitle>
        <InfoDescription>
          호스팅 조건에 적용할 요금을 설정하고<br />
          숙소를 게시해주세요
        </InfoDescription>
      </InfoCard>
    </RightSection>
  );
};

export default HostStartInfoList;
