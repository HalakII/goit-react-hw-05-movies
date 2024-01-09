import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
 
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 65px);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 40px;
  }
`;

export const Item = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  color: #b6587c;
  background-color: #c67e9a;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-align: center;
@media screen and (min-width: 768px) {
   font-size: 24px;
  }
  }
`;
export const TextScore = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: black;
  text-align: center;
  }
`;

export const HomeDiv = styled.div`
  background-color: #58b692;
  color: #e6e6e6;
  padding: 50px 100px;
`;
export const HomeTitle = styled.h1`
  color: black;
  margin-bottom: 20px;
`;
