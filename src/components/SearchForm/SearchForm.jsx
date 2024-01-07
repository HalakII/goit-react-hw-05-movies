import { useSearchParams } from 'react-router-dom';

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
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          autoFocus
          defaultValue={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
