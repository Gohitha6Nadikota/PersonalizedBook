import React from 'react'
import BookNewCard from './BookNewCard';
const BookSelf = ({bookshelf,onRemoveFromBookshelf}) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[80vh]">
      <div className="flex justify-center items-center flex-wrap">
        {bookshelf.length ?
          bookshelf.map((book) => (
            <BookNewCard
              key={book.key}
              book={book}
              onRemoveFromBookshelf={onRemoveFromBookshelf}
            />
          )):<h1>No books added yet..</h1>}
      </div>
    </div>
  );
}

export default BookSelf