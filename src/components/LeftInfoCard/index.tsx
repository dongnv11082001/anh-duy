import React from 'react';
import styled from 'styled-components';
import { IconLocation } from '../Icons/IconLocation';
import { Button } from '../Button';

export const LeftInfoCard = () => (
  <InfoCardWrapper>
    <Image>
      <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-1/p480x480/65386701_2386948258208458_7929288022518923264_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=7206a8&_nc_ohc=AwagDz3eI7AAX_AXL2j&tn=nVXIRkWWtRf9wXE_&_nc_ht=scontent.fhan2-4.fna&oh=2500b4f2ddd384b11b76c430a554c681&oe=6138586E" alt="Mr.Duy" />
    </Image>
    <Header>
      Elemental Design
    </Header>
    <Description>
      <p>Architect, Interior Designer, Project Cordinator</p>
    </Description>
    <ContactLink>
      <a href="https://www.facebook.com/duy.hoangduy.37">https://www.facebook.com/duy.hoangduy.37</a>
    </ContactLink>
    <Address>
      <IconLocation />
      <p>Hanoi, Vietnam</p>
    </Address>
    <Button text="Follow" color="white" background="#0057ff" />
    <Button text="Message" color="#0057ff" border="" />
  </InfoCardWrapper>
);

const InfoCardWrapper = styled.div`
  width: 360px;
  height: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 25px 30px 16px;
  background: white;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Header = styled.h1`
  font-size: 120%;
  margin: 10px 0;
  text-align: center;
`;

const Description = styled.div`
  font-size: 75%;
  color: #696969;
  text-align: center;
`;

const ContactLink = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  a {
    color: #696969;
    font-size: 75%;
    text-decoration: underline;
  }
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  svg {
    fill: #696969;
  }
  p {
    font-size: 75%;
    color: #696969;
    margin-left: 5px;
  }
`;
