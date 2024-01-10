import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderTag,
  HeaderNavList,
  StyledLink,
  StyledHomeLink,
  Container,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
