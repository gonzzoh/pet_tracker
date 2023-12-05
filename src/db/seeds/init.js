// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
    // Deletes ALL existing entries (you can just use knex and delete everything)
    await knex('pet_resources').del();
    // Now run your logic to create your resources with your models

    await knex.table('pet_resources').insert([
      { name: 'dawg', profilePicture: 'https://i.imgur.com/7VnFjyC.jpg', species: 'cat', is_friendly: true },
      { name: 'katt', profilePicture: 'https://i.imgur.com/7VnFjyC.jpg', species: 'dog', is_friendly: false },
    ])

  };