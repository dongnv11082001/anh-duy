import React, { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { Nav } from '../../../../components/Nav';
import SearchBox from '../../../../components/SearchBox';
import { Button } from '../../../../components/Button';
import { Logo } from '../../../../components/Icons/Logo';
import { IconSearch } from '../../../../components/Icons/IconSearch';
import {
  mediaQueryDesktop,
  mediaQueryTablet,
  mediaQueryMobile,
} from '../../../../shared/mediaQuery';

const ButtonsData = [
  {
    id: nanoid(),
    text: 'Login',
    border: 'grey',
    background: '',
    color: 'black',
  },
  {
    id: nanoid(),
    text: 'Sign up',
    background: '#0057ff',
    border: '',
    color: 'white',
  },
];

export const Header = () => {
  const [selectedButton, setSelectButton] = useState<string>('');

  const handleSelectButton = (id: string) => {
    setSelectButton(id);
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <SearchBoxWrapper>
        <SearchBox />
      </SearchBoxWrapper>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
      <ButtonsWrapper>
        {ButtonsData.map((item) => (
          <Button
            text={item.text}
            background={item.background}
            key={item.id}
            border={item.border}
            isSelected={item.id === selectedButton}
            onClick={() => handleSelectButton(item.id)}
            color={item.color}
          />
        ))}
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items:center;
  height: 55px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 0 24px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  ${mediaQueryDesktop(`
    padding: 4px 10px
  `)}
  ${mediaQueryTablet(`
    display: none;
  `)}
  ${mediaQueryMobile(`
    display: none;
  `)}
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 15px;
  margin-right: 24px;
`;

const SearchBoxWrapper = styled.div`
  flex: 1;
  ${mediaQueryTablet(`
    display: none;
  `)}
  ${mediaQueryMobile(`
    display: none;
  `)}
`;

const IconWrapper = styled.div`
  display: none;
  ${mediaQueryTablet(`
    position: absolute;
    display: flex;
    right: 0;
    margin-right: 12px;
  `)}
    ${mediaQueryMobile(`
      position: absolute;
      display: flex;
      right: 0;
      margin-right: 12px;
    `)}
`;

const NavWrapper = styled.div`
  ${mediaQueryTablet(`
    display: none;
  `)}
  ${mediaQueryMobile(`
    display: none;
  `)}
`;
