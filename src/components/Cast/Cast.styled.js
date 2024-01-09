import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  display: grid;
  max-width: calc(100vw - 35px);
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 10px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Name = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  padding-left: 0;
`;
export const Character = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
export const Item = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
`;
export const ActorImage = styled.img`
  min-width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
