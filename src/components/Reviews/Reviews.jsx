import { fetchReviews } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieReviews = () => {
      fetchReviews(movieId)
        .then(review => {
          setReviews(review);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchMovieReviews();
  }, [movieId]);
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
