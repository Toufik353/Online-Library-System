import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <h1>Welcome to the Online Library</h1>
        <p>Discover a world of books across various genres. Dive into new adventures, learn, and grow with the books that inspire you.</p>
        <Link to="/books" className={styles.btnExplore}>Browse Books</Link>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <h3>Fiction</h3>
          <p>Explore a collection of timeless fiction books that transport you to different worlds.</p>
        </div>
        <div className={styles.category}>
          <h3>Non-Fiction</h3>
          <p>Dive into real stories and knowledge with our vast collection of non-fiction books.</p>
        </div>
        <div className={styles.category}>
          <h3>Sci-Fi</h3>
          <p>Discover futuristic stories, space adventures, and mind-bending technologies.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
