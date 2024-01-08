import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  //   const { movieId } = useParams();
  useEffect(() => {});

  return (
    <div>
      <img />
      <div>
        <h2></h2>
        <p>User score:</p>
        <h3>Overview</h3>
        <p></p>
        <h3>Genres</h3>
        <p></p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
