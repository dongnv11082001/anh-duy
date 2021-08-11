import React from 'react';
import styled from 'styled-components';
import { LeftInfoCard } from '../../../../components/LeftInfoCard';

export const Body = () => (
  <BodyWrapper>
    <Banner>
      <img src="https://mir-s3-cdn-cf.behance.net/c88547fe27beff635d855fbca2d6f8bb/17ca963f-afbb-4f1f-a5d3-6db5085548d1_rwc_0x981x2568x283x2568.jpg?h=976beb0bb7396a6fdd9950d47b494b76" alt="banner" />
    </Banner>
    <LeftInfoCardWrapper>
      <LeftInfoCard />
    </LeftInfoCardWrapper>
  </BodyWrapper>
);

const BodyWrapper = styled.div`
  position: relative;
  margin-top: 55px;
`;
const Banner = styled.div`
  height: 210px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
`;

const LeftInfoCardWrapper = styled.div`
  position: absolute;
`;
