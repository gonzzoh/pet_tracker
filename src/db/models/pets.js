const knex = require('./knex');

class Pets {
  // This is just an example query, obviously you need to change it, but it shows you how to use knex.raw and dynamic values
  static async create(body) {
    try {
      const { name, profile_picture, species, is_friendly } = body;
      console.log("Inside try block", name, profile_picture, species, is_friendly);
      const query = `INSERT INTO pet_resources (name, profile_picture, species, is_friendly) VALUES (?, ?, ?, ?) RETURNING *`;
      const res = await knex.raw(query, [name, profile_picture, species, is_friendly]);
      // debugger;
      return res.rows[0];
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