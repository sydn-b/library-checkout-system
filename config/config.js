require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_NAME || 'library_mgmt',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  // You can also add configurations for 'test' and 'production' environments
};
