const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.character = require('./characterModel');

module.exports = db;
