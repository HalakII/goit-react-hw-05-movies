import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderTag,
  HeaderNavList,
  StyledLink,
  StyledHomeLink,
  Container,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderTag>
        <HeaderNavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </HeaderNavList>
        <StyledHomeLink to="/">&#127902; Movies World</StyledHomeLink>
      </HeaderTag>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
