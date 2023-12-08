const create = async (req, res) => {
  // const {body: { name, profilePicture, species, is_friendly }} = req;
  console.log(req.body)
  const newPet = await req.Pets.create(req.body);
  newPet 
  ? res.status(201).send(newPet) 
  : res.sendStatus(500).send({err: 'could not create pet'});
};

module.exports = create;