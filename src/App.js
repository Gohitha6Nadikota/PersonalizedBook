// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import BookSearchPage from "./components/BookSearchPage";
import BookShelfPage from "./components/BookSelfPage";
import { GiBookCover } from "react-icons/gi";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookSearchPage />} />
          <Route path="bookshelf" element={<BookShelfPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
const Layout = () => {
  return (
    <div>
      <header>
        <nav className="h-[9vh] bg-black text-white flex justify-between items-center">
          <GiBookCover className="text-3xl ml-2 md:ml-5" />
          <div className="flex justify-center items-center">
            <a href="/" className="md:font-semibold">
              Book Search
            </a>
            <a href="/bookshelf" className="p-5 md:p-7 md:font-semibold">
              Your Book Shelf
            </a>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
