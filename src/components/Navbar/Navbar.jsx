import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>Library</Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navItem}>Home</Link>
          <Link to="/books" className={styles.navItem}>Browse Books</Link>
          <Link to="/add-book" className={styles.navItem}>Add Book</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
