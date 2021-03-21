const mongoose = require('mongoose');

const Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    name: String,
    age: Number,
    race: String,
    height: String,
    gender: String,
    eyeColor: String,
    quickenings: [String],
    home: String
  })
);

module.exports = Character;
