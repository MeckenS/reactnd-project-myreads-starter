import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }

  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({ bookList: books })
   })
 }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ bookList: books })
    });
  }

  render() {
    return (
      <div className="app">
        {/*<MainPage
          books={this.state.bookList}
          moveBook={this.moveBook}
        />*/}
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
