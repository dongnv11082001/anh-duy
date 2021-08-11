import React from 'react';
import styled from 'styled-components';

type ImagePropsType = {
  src: string
  alt: string
}

export const Image = ({ src, alt }: ImagePropsType) => (
  <ImageWrapper src={src} alt={alt} />
);

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
`;
