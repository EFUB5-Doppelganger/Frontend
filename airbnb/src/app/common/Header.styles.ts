import styled from 'styled-components';

export const Header = styled.header`
  width: 1440px;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 999px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  width: 280px;
  height: 48px;
  padding: 0 12px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #707070;
  padding-left: 4px;

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const SearchButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #ff385c;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserIconContainer = styled.div`
  width: 44px;
  height: 44px;
  background-color: #f7f7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
`;
