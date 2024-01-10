import { useSearchParams } from 'react-router-dom';
import { SearchDiv, Form, StyledSearchIcon } from './SearchForm.styled';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <SearchDiv>
      <Form autoComplete="off" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter movie name..."
          name="query"
          autoFocus
          onChange={e => setSearchParams({ query: e.target.value })}
          value={query}
        />
        <button type="submit">
          <StyledSearchIcon />
        </button>
      </Form>
    </SearchDiv>
  );
};
