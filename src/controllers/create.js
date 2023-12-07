const Pets = require('../db/models/pets');

const create = async (req, res) => {
  try {
    const { name, profilePicture, species, is_friendly } = req.body;

    // Ensure that the required properties are present
    if (!name || !profilePicture || !species || is_friendly === undefined) {
      return res.status(400).json({ error: 'Missing or invalid parameters in the request body.' });
    }

    const pet = await Pets.create({
      name,
      profilePicture,
      species,
      is_friendly,
    });

    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = create;



// const create = async (req, res) => {
//   console.log(req.body);
//   const { Pets, body: { name, profilePicture, species, is_friendly } } = req;
//   const newTask = await Pets.create({ name, profilePicture, species, is_friendly });  
//   newTask 
//   ? res.status(201).send(newTask) 
//   : res.status(400).send('bad request');
// }

// module.exports = create;


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

