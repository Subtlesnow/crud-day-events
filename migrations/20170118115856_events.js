
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table.text('title');
    table.text.('description');
    table.boolean('over_21');
    table.dateTime('start_datetime');
    table.dateTime('end_datetime')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
