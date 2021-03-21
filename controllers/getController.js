const db = require('../models');
const Character = db.character;

exports.getAllCharacters = (req, res) => {
  const filter = {};
  Character.find(filter)
    .exec((error, characters) => {
      if (error) {
        res.status(500).send({ message: error });
        return;
      }
      if (!characters) {
        return res.status(404).send({ message: "No characters have been entered as of yet." });
      }
      return res.status(200).send(characters);
    });
}

exports.getSingleCharacter = (req, res) => {
  const characterName = req.params.character;
  const filter = {name: characterName};
  Character.findOne(filter)
    .exec((error, character) => {
      if (error) {
        res.status(500).send({ message: error });
        return;
      }
      if (!character) {
        return res.status(404).send({ message: "No character by that name exists in database. Condiser visiting /characters for current list of characters." });
      }
      return res.status(200).send(character);
    });    
}
