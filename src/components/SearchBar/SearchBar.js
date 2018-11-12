import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DebounceInput } from "react-debounce-input";

const SearchBar = props => {
  const { inputMinLength, inputPlaceholder, inputDebounceTimeout, onSearch } = props;

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">Close</Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          type="text"
          minLength={inputMinLength}
          placeholder={inputPlaceholder}
          debounceTimeout={inputDebounceTimeout}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  inputMinLength: 1,
  inputDebounceTimeout: 350,
  inputPlaceholder: '',
  onClose: () => { },
}

SearchBar.propTypes = {
  inputMinLength: PropTypes.number,
  inputDebounceTimeout: PropTypes.number,
  inputPlaceholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;