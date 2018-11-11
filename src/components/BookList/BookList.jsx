import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';

const BookList = props => {
  return (
    <ol className="books-grid">
      {props.books.map(book => (
        <li key={book.id}>
          <Book
            title={book.title}
            author={book.authors.join(', ')}
            shelf={book.shelf}
            coverUrl={book.imageLinks.thumbnail}
            onSelectOption={selectedOption => props.onSelectOption(selectedOption, book)}
          />
        </li>
      ))}
    </ol>
  );
};

BookList.defaultProps = {
  books: [],
  onSelectOption: () => {}
}

BookList.propTypes = {
  books: PropTypes.array,
  onSelectOption: PropTypes.func,
}

export default BookList;
