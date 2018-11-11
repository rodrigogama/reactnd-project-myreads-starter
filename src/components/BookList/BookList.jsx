import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';

const BookList = props => {
  return (
    <ol className="books-grid">
      {props.books.map(book => {
        const authors = book.authors ? book.authors.join(', ') : '';
        const coverUrl = book.imageLinks ? book.imageLinks.thumbnail : '';
        return (
          <li key={book.id}>
            <Book
              title={book.title}
              author={authors}
              shelf={book.shelf}
              coverUrl={coverUrl}
              onSelectOption={selectedOption => props.onSelectOption(selectedOption, book)}
            />
          </li>
        )
      })}
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
