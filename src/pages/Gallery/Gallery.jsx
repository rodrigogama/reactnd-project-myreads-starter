import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BookShelf from '../../components/BookShelf';
import Loader from '../../components/Loader';

const shelves = [
  { id: 'currentlyReading', description: 'Currently reading' },
  { id:'read', description: 'Read' },
  { id: 'wantToRead', description: 'Want to read'}
];

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onSelectOptionHandler = this.onSelectOptionHandler.bind(this);
  }

  onSelectOptionHandler(selectedShelf, book) {
    if (this.props.onChange) {
      this.props.onChange(selectedShelf, book);
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.isLoading
              ? <Loader />
              : shelves.map(shelf => {
                const books = this.props.books.filter(book => book.shelf === shelf.id);
                return <BookShelf
                  key={shelf.id}
                  title={shelf.description}
                  books={books}
                  onSelectOption={this.onSelectOptionHandler}
                />
              })
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Gallery;
