import React from 'react';
import PropTypes from 'prop-types';
import BookTop from './BookTop';

const Book = props => {
  const { title, author, coverWidth, coverHeight, coverUrl, shelf, onSelectOption } = props;

  return (
    <div className="book">
      <BookTop
        width={coverWidth}
        height={coverHeight}
        coverUrl={coverUrl}
        selectedMenuOption={shelf}
        onSelectOption={onSelectOption}
      />
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
};

Book.defaultProps = {
  status: 'none',
  onSelectOption: () => {},
}

Book.propTypes = {
  status: PropTypes.string,
  coverWidth: PropTypes.number,
  coverHeight: PropTypes.number,
  coverUrl: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  onSelectOption: PropTypes.func,
};

export default Book;