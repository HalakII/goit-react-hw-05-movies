import React from 'react';
import {
  StyledLink,
  List,
  Item,
  Photo,
  Text,
  TextScore,
} from './TrendingList.styled';

export const TrendingList = ({ movies }) => {
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <List>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <Item key={id}>
          <StyledLink to={`/movies/${id}`}>
            <Photo
              width="264px"
              height="384px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
            />
            <Text>{title}</Text>
          </StyledLink>
          <TextScore>User Scrore: {Math.round(vote_average * 10)}%</TextScore>
        </Item>
      ))}
    </List>
  );
};
