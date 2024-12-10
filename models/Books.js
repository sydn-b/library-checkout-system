module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      isbn: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(255),
      },
      translator: {
        type: DataTypes.STRING(255),
      },
      book_format: {
        type: DataTypes.STRING(50),
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      publisher: {
        type: DataTypes.STRING(255),
      },
      published: {
        type: DataTypes.DATE,
      },
      book_year: {
        type: DataTypes.INTEGER,
      },
      votes: {
        type: DataTypes.INTEGER,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
    }, {
      timestamps: false,  // Disable automatic `createdAt` and `updatedAt`
    });
  
    return Book;
  };
