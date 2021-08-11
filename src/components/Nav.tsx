import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    title: 'Discover',
    link: 'discover',
  },
  {
    id: nanoid(),
    title: 'Livestream',
    link: 'livestream',
  },
  {
    id: nanoid(),
    title: 'Jobs',
    link: 'jobs',
  },
];

export const Nav = () => (
  <ItemList>
    {navItems.map((item) => <Item key={item.id}><Link href={item.link}>{item.title}</Link></Item>)}
  </ItemList>
);

const ItemList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  height: 100%;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  text-decoration: none;
  position: relative;
  height: 100%;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: -1px;
    opacity: 0;
    transition: 0.2s all;
  }
  &:hover {
    &:after {
      opacity: 1;
      bottom: 0;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 80%;
  font-weight: 500;
`;
