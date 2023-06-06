import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  const handleInput = e => setInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(input);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
          value={input}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
};
