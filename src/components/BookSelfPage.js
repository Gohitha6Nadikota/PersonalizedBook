import React, {useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookSelf";
import { GiBookshelf } from "react-icons/gi";

const BookShelfPage = () => {
  const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
  const [bookitems,setBookItems]=useState(bookshelf);
  const removeFromBookshelf = (book) => {
    const updatedBookshelf =bookitems.filter((b)=>(b!==book));
    setBookItems(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-between items-center h-[9vh] w-[100vw]">
        <h1 className="pl-5 flex justify-center items-center text-3xl ">
          My <GiBookshelf className="text-5xl pl-2" />
        </h1>
        <h1 className="pr-5 bg-black text-white p-2 mr-4">
          <Link to="/">Back to Search</Link>
        </h1>
      </div>
      <div className="">
        <BookShelf
          bookshelf={bookitems}
          onRemoveFromBookshelf={removeFromBookshelf}
        />
      </div>
    </div>
  );
};

export default BookShelfPage;
