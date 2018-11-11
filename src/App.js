import React from 'react';
import { Route } from 'react-router-dom';
import Search from './pages/Search';
import Gallery from './pages/Gallery';
import Snackbar from './components/Snackbar';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      isLoading: true,
    };

    this.showSnackbar = this.showSnackbar.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(selectedShelf, book) {
    // update the selected book with the right shelf
    book.shelf = selectedShelf;

    // create a new array of books
    const books = [...this.state.books];
    
    // find the book index that we want to update
    const bookIndex = this.state.books.findIndex(b => b.id === book.id);

    // book is already in the list
    if (bookIndex !== -1) {
      // update the state with the prev booklist and the book updated
      books[bookIndex] = { ...book };
    } else {
      // book came from search, so add the book to the list
      books.push(book);
    }
    
    this.setState({ books: books });
    this.showSnackbar();

    // persist the book updated through the API
    BooksAPI.update(book, selectedShelf);
  }

  async componentDidMount() {
    // get all books stored in the database and update the app's state
    const books = await BooksAPI.getAll();
    this.setState({
      books: books,
      isLoading: false,
    });
  }

  showSnackbar() {
    this.setState({ showSnackbar: true });
    setTimeout(() => this.setState({ showSnackbar: false }), 2000);
  }

  render() {
    const { books, isLoading, showSnackbar } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Gallery
              books={books}
              isLoading={isLoading}
              onChange={this.onChangeHandler}
            />
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={books}
              onChange={this.onChangeHandler}
            />
          )}
        />

        <Snackbar message="Book updated!" isVisible={showSnackbar} />
      </div>
    );
  }
}

export default BooksApp;
