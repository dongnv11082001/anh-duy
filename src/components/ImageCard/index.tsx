import React from 'react';
import styled, { css } from 'styled-components';
import { Image } from '../Image';
import { IconLike } from '../Icons/IconLike';
import { IconWatch } from '../Icons/IconWatch';

type ImageCardPropsType = {
  src: string
  size: string
  alt: string
  title: string
  content: string
  count: {
    like: number
    watch: number
  }
  like: number
  watch: number
}

export const ImageCard = ({
  size,
  src,
  alt,
  title,
  content,
  count,
}: ImageCardPropsType) => (
  <ImageCardWrapper size={size}>
    <Image src={src} alt={alt} />
    <ImageCardCover className="imageCard-cover">
      <Title>{title}</Title>
      <FooterWrapper>
        <Content>{content}</Content>
        <Icons>
          <IconLikeWrapper>
            <IconLike />
            <span>{count.like}</span>
          </IconLikeWrapper>
          <IconWatchWrapper>
            <IconWatch />
            <span>{count.watch}</span>
          </IconWatchWrapper>
        </Icons>
      </FooterWrapper>
    </ImageCardCover>
  </ImageCardWrapper>
);

const ImageCardWrapper = styled.div<{size: string}>`
  position: relative;
  border-radius: 4px;
  ${({ size }) => size && css`
      
    `}
  overflow: hidden;
  cursor: pointer;
  &:hover .imageCard-cover {
    display: block;
  }
`;

const ImageCardCover = styled.div`
  display: none;
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 4px;
  background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0.3));
`;
const Title = styled.h2`
  
`;
const Content = styled.p`
  
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconLikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconWatchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
