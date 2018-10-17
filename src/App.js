import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }

 getBooks = () => BooksAPI.getAll().then((books) => {
   this.setState({ bookList: books })
 })

  componentDidMount() {
   this.getBooks()
 }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getBooks())
  }

  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.bookList}
          moveBook={this.moveBook}
        />
        {/*<SearchPage/>*/}
      </div>
    )
  }
}

export default BooksApp
