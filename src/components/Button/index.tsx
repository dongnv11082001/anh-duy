import React from 'react';
import styled, { css } from 'styled-components';

type ButtonPropsType = {
  text: string
  background?: string
  border?: string
  onClick?: () => void
  isSelected?: boolean
  color: string
}

export const Button = ({
  border,
  text,
  background,
  onClick,
  isSelected,
  color,
}: ButtonPropsType) => (
  <ButtonWrapper
    background={background}
    border={border}
    onClick={onClick}
    style={{
      background: isSelected ? 'black' : '',
    }}
    color={color}
  >
    {text}
  </ButtonWrapper>
);

const ButtonWrapper = styled.div<{
  background?: string;
  border?: string;
  color: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border-radius: 20px;
  padding: 7px 20px;
  max-width: 100%;
  font-size: 70%;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    ${({ border }) => border && css`
    ${border === 'grey' ? 'border: 1px solid #817E86' : 'border: 1px solid blue'}
    `}  
  }
  ${({ background }) => background && css`
      background: ${background};
    `}
  ${({ color }) => color && css`
    color: ${color};
    `}
  ${({ border }) => border && css`
  ${border === 'grey' ? 'border: 1px solid #A7A4AC' : 'border: 1px solid blue'}
    `}
`;
