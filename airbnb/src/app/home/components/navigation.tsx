import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Navigation () {
  return (
    <Wrapper>
      <Image 
        src="/navigation/navigationArrowLeft.svg"
        alt="왼쪽 화살표"
        width={70} 
        height={70}
      />

      <MenuBar>
        <Menu>
          <Image 
            src="/navigation/navigationBeach.svg"
            alt="beach"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Beach</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationPool.svg"
            alt="pool"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Beauty Pools</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationNew.svg"
            alt="new"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>New</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationSleepBox.svg"
            alt="sleepbox"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Sleep Box</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationBoats.svg"
            alt="boats"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Boats</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationCamping.svg"
            alt="camping"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Camping</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationMensions.svg"
            alt="mensions"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Mensions</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationIslands.svg"
            alt="islands"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Islands</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationDesert.svg"
            alt="desert"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Desert</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationDomes.svg"
            alt="domes"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Domes</MenuName>
        </Menu>

        <Menu>
          <Image 
            src="/navigation/navigationCabins.svg"
            alt="cabins"
            width={50} 
            height={50}
          />
          <MenuName className={poppins.className}>Cabins</MenuName>
        </Menu>
      </MenuBar>

      <Image 
        src="/navigation/navigationArrowRight.svg"
        alt="오른쪽 화살표"
        width={70} 
        height={70}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 6.5625rem;
  height: 6.25rem;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
`;

const MenuName = styled.h3`
  color: #3E3E3E;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

