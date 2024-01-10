import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchSearchMovies } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  HomeDiv,
  TextInfo,
} from '../components/TrendingList/TrendingList.styled';
import { Loader } from 'components/Loader/Loader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noName, setNoName] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const searchQuery = searchParam.get('query') ?? '';

  useEffect(() => {
    const fetchMoviesSearch = () => {
      setLoading(true);
      fetchSearchMovies(searchQuery)
        .then(queryMovieName => {
          setMovies(queryMovieName);
          setNoName(queryMovieName.length === 0);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (searchQuery) {
      fetchMoviesSearch();
    } else {
      setMovies([]);
      setNoName(false);
      setLoading(false);
    }
  }, [searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <HomeDiv>
      <SearchForm query={searchQuery} onChange={updateQueryString} />
      {loading && <Loader />}
      {noName && searchQuery && (
        <TextInfo>
          There is no movies with this request. Please, try again
        </TextInfo>
      )}
      <TrendingList movies={movies} />
    </HomeDiv>
  );
}

export default Movies;
