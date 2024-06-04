import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const debouncedSearch = React.useMemo(() => {
    let timerId = null;

    const search = async (q) => {
      if (q.length > 2) {
        clearTimeout(timerId);
        timerId = setTimeout(async () => {
          const response = await axios.get(
            `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
          );
          setBooks(response.data.docs);
        }, 500);
      } else {
        setBooks([]);
      }
    };

    return search;
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for books..."
          className="w-[75vw] my-4 border border-black focus:border-black p-3"
        />
        <Link to="bookshelf">
          <GiBookshelf className="text-5xl bg-black text-white mx-2" />
        </Link>
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onAddToBookshelf={onAddToBookshelf}
            />
          ))
        ) : (
          <h1>Enter atleast 3 letters to search for book...</h1>
        )}
      </div>
    </div>
  );
};

export default BookSearch;
