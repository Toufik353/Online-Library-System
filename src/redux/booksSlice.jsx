import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
   
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A novel set in the American South during the 1930s, it explores issues of race, class, and morality through the eyes of young Scout Finch. Her father, lawyer Atticus Finch, defends a black man accused of raping a white woman, challenging the prejudices of their small town.",
          rating: 4.9,
    coverImage:"https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "This book explores the history of humankind from the Stone Age to the present day, covering the cognitive, agricultural, and scientific revolutions. Harari provides insights into how our species has shaped and been shaped by society, culture, and technology.",
      rating: 4.7,
    coverImage:"https://images.meesho.com/images/products/353384321/us5iw_512.webp"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    description: "Set in the 1920s, this novel tells the story of the enigmatic millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan. Through the eyes of narrator Nick Carraway, Fitzgerald examines themes of love, wealth, and the American Dream.",
      rating: 4.3,
    coverImage:"https://m.media-amazon.com/images/I/81n682DOVAL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    category: "Science Fiction",
    description: "Dune follows young Paul Atreides as he navigates a complex universe of politics, religion, and environmental challenges on the desert planet Arrakis. A masterpiece of science fiction, the novel explores power, destiny, and survival.",
      rating: 4.6,
    coverImage:"https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg"
  },
  {
    id: 5,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "This psychological thriller revolves around Alicia Berenson, a woman who shoots her husband and then goes mute. Psychotherapist Theo Faber is determined to unravel the mystery behind her silence, leading to shocking revelations.",
      rating: 4.2,
    coverImage:"https://img.bookchor.com/images/cover/747/9781409181637.jpg"
  },
  {
    id: 6,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    description: "In her memoir, former First Lady Michelle Obama shares her journey from growing up in Chicago to her years in the White House. Her story is one of resilience, family, and finding one’s voice in a challenging world.",
      rating: 4.8,
    coverImage:"https://m.media-amazon.com/images/M/MV5BODg0NjU1MTYtMWJiYy00ODY5LWI2ZmEtOTMxYzMyYzRlNTc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "Bilbo Baggins, a reluctant hobbit, is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the dragon Smaug. This enchanting tale combines adventure, friendship, and the discovery of inner strength.",
      rating: 4.9,
    coverImage:"https://m.media-amazon.com/images/I/71jKeGU9nKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    category: "Memoir",
    description: "Tara Westover recounts her journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University. Her story is one of resilience and the transformative power of education.",
      rating: 4.7,
    coverImage:"https://m.media-amazon.com/images/I/91BHu7xj8eL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    description: "In a totalitarian future, Winston Smith works rewriting history but dreams of rebellion. Orwell’s chilling novel explores themes of surveillance, individuality, and the consequences of authoritarianism.",
      rating: 4.8,
    coverImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwafUS7Kc1GlOIrAtRo6uNbYHOaoW1hQ3dQ&s"
  },
  {
    id: 10,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    description: "This book offers a comprehensive guide to forming good habits and breaking bad ones. Through scientific insights and practical advice, Clear demonstrates how small changes can lead to remarkable personal growth.",
      rating: 4.9,
    coverImage:"https://cdn01.sapnaonline.com/product_media/9781847941831/md_9781847941831_051020241203850.jpg"
  }


  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
