import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: #58b692;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListGenres = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const ImgWrp = styled.div`
  display: flex;
  justify-content: center;
  background: #58b692;
`;

export const InfoWrp = styled.div`
  padding: 15px;
`;

export const LinkInfo = styled(Link)`
  display: block;
  background-color: #c67e9a;
  width: 100px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  padding: 5px 35px 5px 35px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #964262;
  }
  @media screen and (min-width: 768px) {
    margin: 15px;
  }
`;
export const AdditionalWrp = styled.div`
  padding: 15px;
  background: #58b692;
  
  
  @media screen and (min-width: 768px) {
    padding-left: 0;
  }
  h3 { 
    margin-left: 15px;}
  
}
`;
export const LineDiv = styled.div`
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`;
export const Img = styled.img`
  padding: 15px;
  width: 350px;
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
`;

export const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 6px;
  width: 100px;
  background-color: #c67e9a;
  margin: 15px;
  padding: 5px 15px 5px 15px;
  border: 1px solid grey;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  &:hover {
    background-color: #964262;
  }
`;
export const BackDiv = styled.div`
  background: #58b692;
  padding: 5px 15px 5px 15px;
`;
