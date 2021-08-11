import React from 'react';
import styled from 'styled-components';
import { IconSearch } from '../Icons/IconSearch';

const SearchBox = () => (
  <SearchBoxWrapper>
    <IconWrapper>
      <IconSearch />
    </IconWrapper>
    <Search type="text" placeholder="Search..." />
  </SearchBoxWrapper>
);

const Search = styled.input`
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: transparent;
  padding: 8px 40px;
  outline: none;
  word-spacing: 1px;
  font-weight: 300;
  font-size: 70%;
  color: #191919;
  width: 100%;
`;

const SearchBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 488px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 6px;
  svg {
    fill: #959595;
  }
`;

export default SearchBox;
