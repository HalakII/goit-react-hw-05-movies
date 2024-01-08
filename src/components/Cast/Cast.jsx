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
  return (
    <ul>
      {
        <li>
          <img />
          <p></p>
          <p>Character:</p>
        </li>
      }
    </ul>
  );
};
