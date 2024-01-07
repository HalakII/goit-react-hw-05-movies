import React from 'react';
import { Link } from 'react-router-dom';

export const TrendingList = ({ movies }) => {
  console.log(movies.title);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
