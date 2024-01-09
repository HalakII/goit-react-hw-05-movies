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
    <div style={{ paddingRight: '15px', textAlign: 'justify' }}>
      {reviews.length === 0 && <p>No reviews for this movie...</p>}
      <ul style={{ listStyleType: 'none' }}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
