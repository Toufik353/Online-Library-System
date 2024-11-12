import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import styles from './BrowseBooksPage.module.css';

function BrowseBooksPage() {
  const { category } = useParams();
  
  const books = useSelector((state) => state.books.books);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navbar />
      <div className={styles.pageContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
              />
              
        <div className={styles.bookList}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                <img
                  src={book.coverImage || "https://via.placeholder.com/220x300.png?text=Book+Cover"}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>by {book.author}</p>
                <p className={styles.price}> <span className={styles.rating}>⭐ {book.rating}</span> </p>
                <Link to={`/book/${book.id}`} className={styles.detailsLink}>
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No books found for this category or search term.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooksPage;
