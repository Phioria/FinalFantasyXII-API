const mongoose = require('mongoose');

const Character = mongoose.model(
  "Character",
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Must include a name.']
    },
    age: {
      type: Number,
      min: [0, 'No negative ages, please.'],
      max: [9999, 'Too old, if you feel this is in error, contact me.']
    },
    race: {
      type: String,
      required: false
    },
    height: {
      // Expect in cm
      type: Number,
      min: [1, 'Too short!'],
      max: [9999, 'Way too tall...'],
      required: false
    },
    gender: {
      type: String,
      enum: ['Female', 'Male', 'Other'],
      required: false
    },
    eyeColor: {
      type: String,
      required: false
    },
    quickenings: {
      type: [String],
      required: false
    },
    home: {
      type: String,
      required: false
    }
  })
);

module.exports = Character;
