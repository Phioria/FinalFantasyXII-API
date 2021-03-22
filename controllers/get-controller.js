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
      if (error) return res.status(500).json({ message: error });
      if (!character) {
        return res.status(404).json({
          message: "No character by that name exists in database. Condiser visiting /characters for current list of characters."
        });
      }
      return res.status(200).json(character);
    });
}

exports.getAllMagick = (req, res) => {
  return res.status(200).json({ message: "This is the magick summary data..." });
}

exports.getSingleSpell = (req, res) => {
  return res.status(200).json({ message: "This is a single spell..." });
}

exports.getSingleMagickType = (req, res) => {
  return res.status(200).json({ message: "This is a single magick type..."});
}

exports.getAllArmor = (req, res) => {
  return res.status(200).json({ message: "This is all the armor..." });
}

exports.getSingleArmorType = (req, res) => {
  return res.status(200).json({ message: "This is a single armor type..." });
}

exports.getSingleArmorItem = (req, res) => {
  return res.status(200).json({ message: "This is a single piece of armor..." });
}

exports.getAllWeapons = (req, res) => {
 return res.status(200).json({ message: "Here's the weaps..." });
}

exports.getSingleWeaponType = (req, res) => {
  return res.status(200).json({ message: "Weap Types..." });
}

exports.getSingleWeapon = (req, res) => {
  return res.status(200).json({ message: "here's one weap..." });
}

exports.getAllAccessories = (req, res) => {
  return res.status(200).json({ message: "All Accessories..." });
}

exports.getSingleAccessory = (req, res) => {
  return res.status(200).json({ message: "This is an accessory..." });
}

exports.getAllItems = (req, res) => {
  return res.status(200).json({ message: "This is all the items..." });
}

exports.getSingleItem = (req, res) => {
  return res.status(200).json({ message: "This is a single item..." });
}

exports.getAllGambits = (req, res) => {
  return res.status(200).json({ message: "This is all the gambits..." });
}

exports.getSingleGambit = (req, res) => {
  return res.status(200).json({ message: "This is a single gambit..." });
}

exports.getAllTechniks = (req, res) => {
  return res.status(200).json({ message: "This is all the techniks..." });
}

exports.getSingleTechnik = (req, res) => {
  return res.status(200).json({ message: "This is a single technik..." });
}

exports.getAllStatusEffects = (req, res) => {
  return res.status(200).json({ message: "This is all the status effects..." });
}

exports.getSingleStatusEffect = (req, res) => {
  return res.status(200).json({ message: "This is a single status effect..." });
}
