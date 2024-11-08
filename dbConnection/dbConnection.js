const { Sequelize } = require('sequelize-typescript');

const sequelize = new Sequelize({
  database: 'eduomatic_db',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  storage: ':memory:',
  models: [__dirname + '/models'],
});

export async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect or synchronize the database:', error);
  }
}

initializeDatabase();
