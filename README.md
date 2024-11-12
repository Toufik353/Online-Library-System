Online Library System

Welcome to the Online Library System, a web application where users can explore a variety of books, add new titles, and manage their personal library. This application is built using React, Redux, and React Router.

Table of Contents
Features
Screenshots
Getting Started
Installation
Usage
Technologies
Contributing
License

Features

Browse Books: View a variety of books across different genres.

Add New Book: Users can add new books by providing details such as title, author, category, description, rating, and an image.

Categories: Explore books based on categories like Fiction, Non-Fiction, and Sci-Fi.

Responsive Design: Optimized for desktop and mobile devices.


Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js and npm are installed on your machine.

Installation
Clone the repo:

git clone https://github.com/your-username/online-library-system.git
cd online-library-system
Install dependencies:

npm install
Usage
Run the application locally:

npm start
Open http://localhost:3000 in your browser to view the app.
Folder Structure

src/
├── components/         # Reusable components (Navbar, BookCard)
├── pages/              # Page components (HomePage, AddBookPage, BrowseBooksPage)
├── redux/              # Redux store setup (booksSlice.js)
├── App.js              # Main app component with routes
└── index.js            # Entry point


Adding a Book

Navigate to the Add a New Book section.
Fill in the details, including the title, author, category, description, rating, and an optional image.
Click Add Book to save it to the library.

Technologies
React - Frontend UI library
Redux - State management
React Router - Routing for different pages
CSS Modules - Scoped styling for each component
