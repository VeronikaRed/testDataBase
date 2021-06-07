// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      // port: 3306,
      database: 'my_db',
      user:     'root',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
