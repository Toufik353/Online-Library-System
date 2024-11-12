import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./BookDetailsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { NavLink } from "react-router-dom";

function BookDetailsPage() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id))
  );

  if (!book) return <p className={styles.notFound}>Book not found</p>;

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.bookDetailsContainer}>
          <div className={styles.bookImageContainer}>
            <img
              src={
                book.coverImage ||
                "https://via.placeholder.com/300x400.png?text=Book+Cover"
              }
              alt={book.title}
              className={styles.coverImage}
            />
          </div>
          <div className={styles.bookInfo}>
            <h2 className={styles.title}>{book.title}</h2>
            <p className={styles.author}>by {book.author}</p>
            <div className={styles.ratingContainer}>
              <span className={styles.rating}>⭐ {book.rating}</span>
              <span className={styles.reviewsCount}>(7569 reviews)</span>
            </div>
            <p className={styles.description}>{book.description}</p>
            <div className={styles.details}>
              <p>
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p>
                <strong>First Published:</strong> {book.publishedDate}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p>
                <strong>Language:</strong> {book.language}
              </p>
              <p>
                <strong>Pages:</strong> {book.pages}
              </p>
            </div>
            <div className={styles.editions}>
              <button className={styles.editionButton}>Kindle</button>
              <button className={styles.editionButton}>Paperback</button>
              <button className={styles.editionButton}>Hardcover</button>
              <button className={styles.editionButton}>Audio</button>
            </div>
            <NavLink to="/books">
              <button className={styles.editionButton}>Back to Browse</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetailsPage;
