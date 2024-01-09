import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchTrendingList } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import {
  HomeDiv,
  HomeTitle,
  HomeList,
} from '../components/TrendingList/TrendingList.styled';
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
    <HomeDiv>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        <TrendingList movies={movies} />
      </HomeList>
    </HomeDiv>
  );
};

export default Home;
