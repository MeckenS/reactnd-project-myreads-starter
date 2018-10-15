import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    bookList: []
  }
  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({ bookList: books })
   })
 }
  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.bookList}
        />
      </div>
    )
  }
}

export default BooksApp
