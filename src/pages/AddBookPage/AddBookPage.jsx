import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import styles from './AddBookPage.module.css';
import Navbar from '../../components/Navbar/Navbar';

function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && description && rating) {
      const bookData = {
        id: Date.now(),
        title,
        author,
        category,
        description,
        rating: parseFloat(rating),
          coverImage: image,
      };
      dispatch(addBook(bookData));
      navigate('/books');
    }
  };

  return (
    <div className={styles.mainPage}>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Add a New Book</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              required
            />
            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={styles.input}
              min="1"
              max="5"
              step="0.1"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.input}
            />
            {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
            <button type="submit" className={styles.button}>Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;
