import React from "react";
import PropTypes from 'prop-types';
import BookList from '../BookList';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BookList
          books={props.books}
          onSelectOption={props.onSelectOption}
        />
      </div>
    </div>
  );
};

BookShelf.defaultProps = {
  title: '',
  books: [],
  onSelectOption: () => {},
}

BookShelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
  onSelectOption: PropTypes.func,
};

export default BookShelf;
