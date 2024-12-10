// app.js

// Function to fetch books from the backend and display them on the books.html page
function fetchBooks() {
  fetch('http://localhost:3000/api/books') // Replace with your actual API endpoint
    .then(response => response.json())
    .then(books => {
      const booksList = document.getElementById('books-list');
      booksList.innerHTML = ''; // Clear the list before adding new data

      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>ISBN:</strong> ${book.isbn}</p>
          <p><strong>Publisher:</strong> ${book.publisher}</p>
          <p><strong>Year:</strong> ${book.book_year}</p>
        `;
        booksList.appendChild(bookElement);
      });
    })
    .catch(error => console.error('Error fetching books:', error));
}

// Function to fetch students from the backend and display them on the students.html page
function fetchStudents() {
  fetch('http://localhost:3000/api/students') // Replace with your actual API endpoint
    .then(response => response.json())
    .then(students => {
      const studentsList = document.getElementById('students-list');
      studentsList.innerHTML = ''; // Clear the list before adding new data

      students.forEach(student => {
        const studentElement = document.createElement('div');
        studentElement.classList.add('student');
        studentElement.innerHTML = `
          <h3>${student.student_name}</h3>
          <p><strong>Student ID:</strong> ${student.student_id}</p>
          <p><strong>Group:</strong> ${student.student_group}</p>
        `;
        studentsList.appendChild(studentElement);
      });
    })
    .catch(error => console.error('Error fetching students:', error));
}

// Function to fetch checkouts from the backend and display them on the checkouts.html page
function fetchCheckouts() {
  fetch('http://localhost:3000/api/checkouts') // Replace with your actual API endpoint
    .then(response => response.json())
    .then(checkouts => {
      const checkoutsList = document.getElementById('checkouts-list');
      checkoutsList.innerHTML = ''; // Clear the list before adding new data

      checkouts.forEach(checkout => {
        const checkoutElement = document.createElement('div');
        checkoutElement.classList.add('checkout');
        checkoutElement.innerHTML = `
          <p><strong>Student:</strong> ${checkout.student_name} (ID: ${checkout.student_id})</p>
          <p><strong>Book:</strong> ${checkout.book_title} (ISBN: ${checkout.book_isbn})</p>
          <p><strong>Checkout Date:</strong> ${checkout.checkout_date}</p>
          <p><strong>Return Date:</strong> ${checkout.return_date || 'Not returned yet'}</p>
        `;
        checkoutsList.appendChild(checkoutElement);
      });
    })
    .catch(error => console.error('Error fetching checkouts:', error));
}

// Initialize the appropriate function based on the page
window.addEventListener('load', () => {
  // Check which page we're on and call the corresponding function
  if (document.getElementById('books-list')) {
    fetchBooks();
  } else if (document.getElementById('students-list')) {
    fetchStudents();
  } else if (document.getElementById('checkouts-list')) {
    fetchCheckouts();
  }
});
