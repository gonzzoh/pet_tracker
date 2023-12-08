/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pet_resources', (table) => {
        table.increments(); // this is the id
        table.string('name'); // text
        table.string('profile_picture'); 
        table.string('species'); 
        table.boolean('is_friendly').defaultTo(false); // boolean, optional default
        // name, profilePicture, species, is_friendly
        /* add a foreign key that links to a hypothetical users table */
        // You must first have created a users table with a key called id!
        // table.integer('user_id').index().references('id').inTable('users');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pet_resources');
};
