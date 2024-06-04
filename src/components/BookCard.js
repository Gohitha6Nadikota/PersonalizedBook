import React from "react";
const BookCard = ({ book, onAddToBookshelf }) => {
  return (
    <div className="border border-black m-3 h-[250px] w-[250px] flex justify-start items-center flex-col p-2">
      <p className="p-1 font-semibold text-xl line-clamp-3">
        {book.title}
      </p>
      <p className="p-1 ">
        <span className="font-semibold ">Author: </span>
        <p className="line-clamp-2">
          {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
      </p>
      <button
        className="bg-black text-white font-semibold p-2 m-1 h-[50px] mt-auto mb-1"
        onClick={() => onAddToBookshelf(book)}
      >
        Add
      </button>
    </div>
  );
};

export default BookCard;
