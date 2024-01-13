import { SearchDiv, Form, StyledSearchIcon } from './SearchForm.stayled';

export const SearchForm = ({ handleSubmit }) => {
  return (
    <SearchDiv>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          autoFocus
        />
        <button type="submit">
          <StyledSearchIcon />
        </button>
      </Form>
    </SearchDiv>
  );
};
