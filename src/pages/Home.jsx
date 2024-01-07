import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchTrendingList } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = () => {
      fetchTrendingList()
        .then(trendingMovies => {
          setMovies(trendingMovies);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        <TrendingList movies={movies} />
      </ul>
    </div>
  );
};

export default Home;
