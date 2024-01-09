import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
 display: flex;
  align-items: center;
   justify-content: space-between;
  gap: 10px;
  margin: 0;
  background: #964262;
  }
`;

export const HeaderNavList = styled.nav`
display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 40px ;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 30px;
`;

export const StyledHomeLink = styled(NavLink)`
  color: #ffffff;
  font-size: 24px;
  line-height: 1.19;
  padding: 16px 40px;
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  background-color: #e8eced;
  text-decoration: none;
  border-radius: 50px;
  transition: transform 0.2s;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
    background-color: #e8eced;
    text-decoration: none;

    padding: 5px 10px;
    border-radius: 50px;
    transition: transform 0.2s;
  }

  &.active {
    color: black;
    border: 2px solid #58b692;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
