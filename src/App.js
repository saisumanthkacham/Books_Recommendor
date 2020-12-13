import React, { useState } from "react";
import "./styles.css";

const bookList = {
  Bussiness: [
    {
      book: "Romancing the balance sheet",
      rating: "4.9/5",
      author: "Anil Lambda"
    },
    { book: "Investing In your 20's", rating: "4.4/5", author: "Joe Duarte" },
    {
      book: "The Intelligent Investor",
      rating: "4/5",
      author: "Benjamin Gramham"
    },
    { book: "Rich Dad Poor Dad", rating: "5/5", author: "Robert Kiyosaki" }
  ],
  Coding: [
    {
      book: "Eloquent Javascript",
      rating: "4.4/5",
      author: "Marijn Haverbeke"
    },
    { book: "clean Code", rating: "4.3/5", author: "Robert Martin" },
    { book: "You Don't Know JS", rating: "4.4/5", author: "Kyle Simpson" },
    { book: "HTML & CSS", rating: "4.4/5", author: "Jon Duckett" }
  ],
  Sales: [
    {
      book: "The psychology of selling",
      rating: "4.5/5",
      author: "Brian Tracy"
    },
    {
      book: "How to be a great sales person",
      rating: "4.4/5",
      author: "Dvaid Cook"
    },
    {
      book: "Influence",
      rating: "4.4/5",
      author: "Robert Cialdini"
    },
    {
      book: "Secrets of closing a sale",
      rating: "4.7/5",
      author: "Zig Zigler"
    }
  ],
  Design: [
    { book: "The design of Everything", rating: "4.9/5", author: "Don Norman" },
    {
      book: "The elements of UX",
      rating: "4.3/5",
      author: "Jesse James Garrett"
    },
    { book: "Logo Design Love", rating: "4.7/5", author: "David Airey" }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("Bussiness");
  function genereClickHandler(genre) {
    setGenre(genre);
  }

  const genereArray = Object.keys(bookList);

  return (
    <div className="App">
      <div className="app-heading">Books for Beginners</div>
      <hr className="app-hr" />
      <div className="app-sub-heading">
        select the genre to get recommendation
      </div>
      <div className="app-button-container">
        {genereArray.map((genre) => (
          <button
            key={genre}
            className="app-button"
            onClick={() => genereClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="app-recommended-book">
        {bookList[currentGenre].map((book) => (
          <div key={book.book} className="app-book-card">
            <p className="app-book-card-heading">
              {book.book} - <span>{book.author}</span>
            </p>
            <p className="app-book-card-rating">{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
