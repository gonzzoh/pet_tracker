const create = async (req, res) => {
    const {Pets, body: {name, picture, species, friendly}} = req;
    const newTask = await Pets.create({name, picture, species, friendly});
    newTask ? res.status(201).send(newTask) : res.status(400).send('bad request');
}

module.exports = create;


/* -------------------------------------------------------------------------- /
static async create(data) {
    try {
      const query = `INSERT INTO pet_resources (name, picture, species, friendly) values (?) returning *`;
      const { rows: [newPet] } = await knex.raw(query, [data]);
      return newPet;
    } catch (err) {
      console.error(err);
      return null;
    }
  / -------------------------------------------------------------------------- */

  