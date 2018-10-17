import React, { Component } from 'react'

class Book extends Component {

  render() {
    let thumbnail = this.props.newBook.imageLinks ? this.props.newBook.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => this.props.moveBook(this.props.newBook, event.target.value )}
              value={this.props.currentLocation}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.newBook.title}</div>
        <div className="book-authors">{this.props.newBook.authors}</div>
      </div>
    )
  }
}

export default Book
