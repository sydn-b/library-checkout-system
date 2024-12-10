const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.js')[process.env.NODE_ENV || 'development'];

// Initialize Sequelize with the config
const sequelize = new Sequelize(config);

const db = {
  Sequelize,
  sequelize,
  Book: require('./models/Book')(sequelize, DataTypes),
  Student: require('./models/Student')(sequelize, DataTypes),
  Checkout: require('./models/Checkout')(sequelize, DataTypes),
};

// Define associations
db.Checkout.associate(db);

// Sync database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully!');
}).catch((error) => {
  console.error('Error syncing database:', error);
});

// Example: Add a student and book, and check out a book
async function addSampleData() {
  const student = await db.Student.create({ student_name: 'John Doe', student_group: 'A1' });
  const book = await db.Book.create({ 
    isbn: '1234567890', 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    book_format: 'Hardcover',
    pages: 218, 
    publisher: 'Scribner', 
    published: '1925-04-10', 
    book_year: 1925, 
    votes: 5000, 
    rating: 4.5 
  });
  await db.Checkout.create({
    student_id: student.student_id,
    book_isbn: book.isbn,
    checkout_date: new Date(),
    return_date: null,  // Not returned yet
  });
}

addSampleData();
