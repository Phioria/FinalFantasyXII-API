const db = require('../models');
const Character = db.character;

exports.getAllCharacters = (req, res) => {
  const filter = {};
  Character.find(filter)
    .exec((error, characters) => {
      if (error) return res.status(500).json({ message: error });
      if (!characters) return res.status(404).json({ message: "No characters have been entered as of yet." });
      return res.status(200).json(characters);
    });
}

exports.getSingleCharacter = (req, res) => {
  const characterName = req.params.character;
  const filter = {name: characterName};
  Character.findOne(filter)
    .exec((error, character) => {
      if (error) res.status(500).json({ message: error });
      if (!character) {
        return res.status(404).json({
          message: "No character by that name exists in database. Condiser visiting /characters for current list of characters."
        });
      }
      return res.status(200).json(character);
    });
}

exports.getMagickSummary = (req, res) => {
  return res.status(200).json({ message: "This is the magick summary data..." });
}

exports.getSingleSpell = (req, res) => {
  return res.status(200).json({ message: "This is a single spell..." });
}

exports.getSingleMagickType = (req, res) => {
  return res.status(200).json({ message: "This is a single magick type..."});
}


