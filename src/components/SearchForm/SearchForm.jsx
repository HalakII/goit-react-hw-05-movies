import { useSearchParams } from 'react-router-dom';
import { SearchDiv, Form, StyledSearchIcon } from './SearchForm.styled';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ searchQuery: form.elements.searchQuery.value });
    form.reset();
  };

  return (
    <SearchDiv>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          autoFocus
          defaultValue={searchQuery}
        />
        <button type="submit">
          <StyledSearchIcon />
        </button>
      </Form>
    </SearchDiv>
  );
};
