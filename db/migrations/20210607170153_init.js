exports.up = function(knex) {
  return knex.schema.createTable('person', table => {
      table.increments('userid');
      table.string('login').notNullable().unique();
      table.string('password', 10).notNullable().unique();
      table.date('registration_date');
      table.date('last_visit_date');
      table.string('ip').unique();
      table.boolean('flag');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('person');
};
