// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (title) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}`
      );
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="app">
      <h1>Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;
