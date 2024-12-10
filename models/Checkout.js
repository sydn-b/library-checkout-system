module.exports = (sequelize, DataTypes) => {
    const Checkout = sequelize.define('Checkout', {
      checkout_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      checkout_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      return_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      timestamps: false,  // Disable automatic `createdAt` and `updatedAt`
    });
  
    Checkout.associate = (models) => {
      Checkout.belongsTo(models.Student, { foreignKey: 'student_id' });
      Checkout.belongsTo(models.Book, { foreignKey: 'book_isbn' });
    };
  
    return Checkout;
  };
  