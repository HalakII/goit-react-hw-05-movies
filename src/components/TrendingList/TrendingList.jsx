import React from 'react';

export const TrendingList = ({ movies }) => {
  console.log(movies.title);
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}> {title}</li>
      ))}
    </ul>
  );
};
