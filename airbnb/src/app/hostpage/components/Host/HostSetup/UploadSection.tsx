'use client';

import Image from 'next/image';
import * as S from './HostSetup.styles';

interface Props {
  name: string;
  description: string;
  images: string[];
  setName: (value: string) => void;
  setDescription: (value: string) => void;
  setImages: (urls: string[]) => void;
}

const UploadSection = ({ name, description, images, setName, setDescription, setImages }: Props) => {
  const handleAddImage = () => {
    const newUrl = prompt('이미지 URL을 입력하세요'); // 임시 방식
    if (newUrl) {
      setImages([...images, newUrl]);
    }
  };

  return (
    <>
      <S.Section>
        <S.SectionTitle>숙소 사진을 최소 1장 이상 추가해주세요</S.SectionTitle>
        <S.UploadArea onClick={handleAddImage}>
          <S.UploadIcon>
            <Image src="/hostpage/upload.svg" alt="upload" width={40} height={40} />
          </S.UploadIcon>
          <S.UploadButton>사진 추가하기</S.UploadButton>
        </S.UploadArea>
      </S.Section>

      <S.Section>
        <S.SectionTitle>숙소의 이름을 지어주세요</S.SectionTitle>
        <S.SectionDescription>
          숙소 이름은 짧으면서도 매력적이어야 사람의 시선을 끌 수 있습니다
        </S.SectionDescription>
        <S.TextArea
          placeholder="숙소 이름을 입력해주세요"
          rows={4}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.Section>

      <S.Section>
        <S.SectionTitle>숙소에 대한 설명을 작성해주세요</S.SectionTitle>
        <S.SectionDescription>
          숙소 설명은 편의시설, 위치, 분위기 등을 포함하면 좋습니다
        </S.SectionDescription>
        <S.TextArea
          placeholder="숙소 설명을 입력해주세요"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </S.Section>
    </>
  );
};

export default UploadSection;
