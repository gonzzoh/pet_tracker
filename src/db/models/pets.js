const knex = require('./knex');

class Pets {
  // This is just an example query, obviously you need to change it, but it shows you how to use knex.raw and dynamic values
  static async create(name, picture, species, friendly) {
    try {
      const query = `INSERT INTO pet_resources (name, picture, species, friendly) values (?) returning *`;
      const { rows: [newPet] } = await knex.raw(query, [name, picture, species, friendly]);
      return newPet;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = `SELECT * FROM pet_resources`;
      const  res  = await knex.raw(query);
      return res.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;