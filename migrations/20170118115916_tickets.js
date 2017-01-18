
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', function(table) {
    table.increments();
    table.text('name');
    table.decimal('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
