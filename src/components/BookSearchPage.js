import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <BookSearch onAddToBookshelf={addToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
