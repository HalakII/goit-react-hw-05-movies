import { fetchActors } from 'helppers/fetch';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchCast = () => {
      fetchActors(movieId)
        .then(actorsInfo => {
          setActors(actorsInfo);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchCast();
  }, [movieId]);
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul>
      {actors.map(({ name, character, id, profile_path, original_title }) => (
        <li key={id}>
          <img
            width="250px"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultMovieImg
            }
            alt={original_title}
          />
          <p>{name}</p>
          <p>Character:{character}</p>
        </li>
      ))}
    </ul>
  );
};
