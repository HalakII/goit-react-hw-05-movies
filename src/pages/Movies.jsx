import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { fetchSearchMovies } from 'helppers/fetch';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  useEffect(() => {
    if (!query) return;
    const fetchMoviesSearch = () => {
      fetchSearchMovies(query)
        .then(queryMovieName => {
          setMovies(queryMovieName);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {});
    };
    fetchMoviesSearch();
  }, [query]);

  return (
    <div>
      <SearchForm />
      <TrendingList movies={movies} />
    </div>
  );
}

export default Movies;
