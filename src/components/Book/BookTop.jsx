import React from 'react';
import PropTypes from 'prop-types';

const BookTop = props => {
  const { width, height, coverUrl, selectedMenuOption, onSelectOption } = props;

  return (
    <div className="book-top">
      <div className="book-cover" style={{ width: width, height: height, backgroundImage: `url('${coverUrl}')` }}></div>
      <div className="book-shelf-changer">
        <select name="book-select" value={selectedMenuOption || 'none'} onChange={event => onSelectOption(event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

BookTop.defaultProps = {
  width: 128,
  height: 192,
  selectedMenuOption: null,
  coverUrl: '',
};

BookTop.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  coverUrl: PropTypes.string,
  selectedMenuOption: PropTypes.string,
  onSelectOption: PropTypes.func.isRequired,
};

export default BookTop;