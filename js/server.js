// server.js (Node.js + Express)

const express = require('express');
const app = express();
const port = 3000;

// Mock data (replace with actual Sequelize models and queries)
const books = [
  { isbn: '12345', title: 'Book 1', author: 'Author A', publisher: 'Publisher A', book_year: 2020 },
  { isbn: '67890', title: 'Book 2', author: 'Author B', publisher: 'Publisher B', book_year: 2021 }
];
const students = [
  { student_id: 1, student_name: 'John Doe', student_group: 'A1' },
  { student_id: 2, student_name: 'Jane Smith', student_group: 'B2' }
];
const checkouts = [
  { student_name: 'John Doe', student_id: 1, book_title: 'Book 1', book_isbn: '12345', checkout_date: '2024-12-01', return_date: '2024-12-15' },
  { student_name: 'Jane Smith', student_id: 2, book_title: 'Book 2', book_isbn: '67890', checkout_date: '2024-12-02', return_date: null }
];

// API routes
app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/checkouts', (req, res) => {
  res.json(checkouts);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
