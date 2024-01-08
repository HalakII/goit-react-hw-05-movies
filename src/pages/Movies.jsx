import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchSearchMovies } from 'helppers/fetch';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  useEffect(() => {
    fetchSearchMovies(query);
  });
  return (
    <div>
      <SearchForm />
    </div>
  );
}

export default Movies;
