import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import BookList from "../../components/BookList";
import Loader from "../../components/Loader";
import * as BooksAPI from "../../BooksAPI";

const INITIAL_STATE = {
  books: [],
  hasSearched: false,
  isLoading: false,
  searchTerm: '',
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSelectOptionHandler = this.onSelectOptionHandler.bind(this);
  }

  async onSearchHandler(event) {
    if (!event.target.value) {
      this.setState({ ...INITIAL_STATE });
      return;
    };

    await this.setState({
      isLoading: true,
      searchTerm: event.target.value,
    });

    const response = await BooksAPI.search(event.target.value);
    const books = response.error ? response.items : response;

    books.forEach(book => {
      const bookIndex = this.props.books.findIndex(b => b.id === book.id);

      // if the searched book is in the gallery book, then update its shelf
      if (bookIndex !== -1) {
        book.shelf = this.props.books[bookIndex].shelf;
      }
    });

    this.setState({
      books: books,
      isLoading: false,
      hasSearched: true,
    });
  }

  onSelectOptionHandler(selectedShelf, book) {
    if (this.props.onChange) {
      this.props.onChange(selectedShelf, book);
    }
  }

  render() {
    const { books, isLoading, hasSearched, searchTerm } = this.state;

    return (
      <div className="search-books">
        <SearchBar
          onSearch={this.onSearchHandler}
          inputPlaceholder="Search by title or author"
        />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="search-books-results">
            {books.length ? (
              <BookList
                books={books}
                onSelectOption={this.onSelectOptionHandler}
              />
            ) :
            hasSearched && <p style={{ textAlign: 'center'}}>{`No books found with ${searchTerm}.`}</p>
          }
            
          </div>
        )}
      </div>
    );
  }
}

export default Search;
