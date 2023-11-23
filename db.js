const { Sequelize } = require('sequelize');

// Database
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // Utilise la variable d'environnement DATABASE_URL
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
);

sequelize.authenticate();
sequelize.sync();

module.exports = sequelize;
