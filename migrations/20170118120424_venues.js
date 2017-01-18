
exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', function(table) {
    table.increments();
    table.text('name');
    table.integer('capacity');
    table.text.('line_1');
    table.text.('line_2');
    table.text('city');
    table.text('state');
    table.integer('zip');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues');
};
