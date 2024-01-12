import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchSearchMovies } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { SearchDiv, Form, StyledSearchIcon } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { HomeDiv, TextInfo } from 'components/TrendingList/TrendingList.styled';
import { Loader } from 'components/Loader/Loader';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noName, setNoName] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
  };
  // const updateQueryString = query => {
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <HomeDiv>
      <SearchDiv>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter movie name..."
            name="searchQuery"
            autoFocus
            // value={query}
          />
          <button type="submit">
            <StyledSearchIcon />
          </button>
        </Form>
      </SearchDiv>

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