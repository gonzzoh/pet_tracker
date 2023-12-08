const destroy = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const deletedPet = await req.Pets.delete(Number(id));
    deletedPet
        ? res.status(200).send(deletedPet)
        : res.sendStatus(500).send({err: 'could not delete pet'});
}

module.exports = destroy;