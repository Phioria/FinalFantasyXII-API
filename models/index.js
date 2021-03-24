const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.character = require('./character-model');

module.exports = db;
