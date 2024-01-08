import { fetchMovieInform } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetchMovieInform(movieId)
        .then(movieDetails => {
          setMovieInfo(movieDetails);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchMovieDetails();
  }, [movieId]);
  if (!movieInfo) {
    return;
  }
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};
  const releaseDate = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const defaultMovieImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultMovieImg
        }
        alt={original_title}
      />
      <div>
        <h2>
          {title}({releaseDate})
        </h2>
        <p>User score:{userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
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
