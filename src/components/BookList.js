
import React from 'react';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book-item">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(', ') || 'Unknown'}</p>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BookList;
