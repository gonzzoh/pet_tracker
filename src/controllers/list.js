const list = async (req, res) => {
    const pets = await req.Pets.list();
    res.send(pets);
}

module.exports = list;

/* -------------------------------------------------------------------------- /
try {
    const query = `SELECT * FROM pet_resources`;
    const  res  = await knex.raw(query);
    return res.rows;
  } catch (err) {
    console.error(err);
    return null;
  }
}
/ -------------------------------------------------------------------------- */
