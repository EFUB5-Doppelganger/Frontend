'use client';

import Image from 'next/image';
import { useRef } from 'react';
import * as S from './HostSetup.styles';

interface Props {
  name: string;
  description: string;
  images: File[]; 
  setName: (value: string) => void;
  setDescription: (value: string) => void;
  setImages: (files: File[]) => void;
}

const UploadSection = ({ name, description, images, setName, setDescription, setImages }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages([...images, ...fileArray]);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <S.Section>
        <S.SectionTitle>숙소 사진을 최소 1장 이상 추가해주세요</S.SectionTitle>
        <S.UploadArea onClick={handleClickUpload}>
          <S.UploadIcon>
            <Image src="/hostpage/upload.svg" alt="upload" width={40} height={40} />
          </S.UploadIcon>
          <S.UploadButton>사진 추가하기</S.UploadButton>
        </S.UploadArea>

        {/* 숨겨진 파일 input */}
        <input
          type="file"
          accept="image/*"
          multiple
          hidden
          ref={fileInputRef}
          onChange={handleImageSelect}
        />

        {/* 미리보기 */}
        {images.length > 0 && (
          <S.ImagePreviewWrapper>
            {images.map((file, idx) => (
              <Image
                key={idx}
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                width={120}
                height={80}
              />
            ))}
          </S.ImagePreviewWrapper>
        )}
      </S.Section>

      <S.Section>
        <S.SectionTitle>숙소의 이름을 지어주세요</S.SectionTitle>
        <S.TextArea
          placeholder="숙소 이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </S.Section>

      <S.Section>
        <S.SectionTitle>숙소에 대한 설명을 작성해주세요</S.SectionTitle>
        <S.TextArea
          placeholder="숙소 설명을 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </S.Section>
    </>
  );
};

export default UploadSection;
