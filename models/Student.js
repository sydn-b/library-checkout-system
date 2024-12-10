module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      student_group: {
        type: DataTypes.STRING(5),
      },
    }, {
      timestamps: false,  // Disable automatic `createdAt` and `updatedAt`
    });
  
    return Student;
  };
  