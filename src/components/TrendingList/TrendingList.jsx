import React from 'react';
import { Link } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <img
              width="264px"
              height="384px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultMovieImg
              }
              alt={title}
            />
            <p>{title}</p>
          </Link>
          <p>User Scrore: {Math.round(vote_average * 10)}%</p>
        </li>
      ))}
    </ul>
  );
};
