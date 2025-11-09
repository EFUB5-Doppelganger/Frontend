import styled from 'styled-components';

export const Footer = styled.footer`
  height: 50px;
  width: 100%;
  min-width: 900px;
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background-color: #ffffff;
  color: #707070;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
`;

export const Section = styled.div`
  display: flex;
  gap: 15px;
  white-space: nowrap;
`;

export const Item = styled.span`
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff385c;
  }
`;
