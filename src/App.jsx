import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import AddBookPage from './pages/AddBookPage/AddBookPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/books', element: <BrowseBooksPage /> },
  { path: '/books/:category', element: <BrowseBooksPage /> },
  { path: '/book/:id', element: <BookDetailsPage /> },
  { path: '/add-book', element: <AddBookPage /> },
  { path: '*', element: <NotFoundPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
