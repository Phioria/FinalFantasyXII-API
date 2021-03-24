const db = require('../models');
const Character = db.character;

exports.addSingleCharacter = (req, res) => {
  // Need a validator here to check if character already exists
  // Should also make sure all relevant details exist in character request
  // Should set the schema in the model to have required fields
  // If some fields are optional and not present, they should default to an acceptable input
  const newCharacter = new Character({
    name: req.body.name,
    age: req.body.age,
    race: req.body.race,
    height: req.body.height,
    gender: req.body.gender,
    eyeColor: req.body.eyeColor,
    quickenings: req.body.quickenings,
    home: req.body.home
  });

  newCharacter.save((error, character) => {
    if (error) return res.status(500).json({ message: error });
    return res.json({
      message: `Character ${newCharacter.name} added!`,
      details: newCharacter
    });
  });
}
