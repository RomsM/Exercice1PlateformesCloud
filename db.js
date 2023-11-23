const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://dbexercice1plateformescloud_user:x9lqmSRB9FIfiqovcJyWPsonJbhZ8I6G@dpg-clfhklg3nsgc738usogg-a/dbexercice1plateformescloud', // TODO: database connection string
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
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
