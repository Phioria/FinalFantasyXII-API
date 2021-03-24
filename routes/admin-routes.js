const express = require('express');
const router = express.Router();

// Take time to consider if there is unnecessary duplication in these
// Controller methods.  Can we reuse some methods?  At least for delete?

// Characters
router.route('/characters')
  .post(Controller.addCharacter)
  .put(Controller.updateCharacter)
  .delete(Controller.deleteCharacter);

// Spells
router.route('/spells')
  .post(Controller.addSpell)
  .put(Controller.updateSpell)
  .delete(Controller.deleteSpell);

// Armor
router.route('/armor')
  .post(Controller.addArmor)
  .put(Controller.updateArmor)
  .delete(Controller.deleteArmor)

// Weapons
router.route('/weapons')
  .post(Controller.addWeapon)
  .put(Controller.updateWeapon)
  .delete(Controller.deleteWeapon);

// Accessories
router.route('/accessories')
  .post(Controller.addAccessory)
  .put(Controller.updateAccessory)
  .delete(Controller.deleteAccessory);

// Consumable Items
router.route('/items')
  .post(Controller.addItem)
  .put(Controller.updateItem)
  .delete(Controller.deleteItem);

// Gambits
router.route('/gambits')
  .post(Controller.addGambit)
  .put(Controller.updateGambit)
  .delete(Controller.deleteGambit);

// Techniks
router.route('/technicks')
  .post(Controller.addTechnick)
  .put(Controller.updateTechnick)
  .delete(Controller.deleteTechnick);

// Status Effects
router.route('/status-effects')
  .post(Controller.addStatus)
  .put(Controller.updateStatus)
  .delete(Controller.deleteStatus);

// NPCs


// Monsters


// Hunts


// Licenses


// Jobs


// Cities
router.route('/cities')
  .post(Controller.addCity)
  .put(Controller.updateCity)
  .delete(Controller.deleteCity);

// Zones


// Teleport Crystals


// Airports


// Espers


// Quickenings
router.route('/quickenings')
  .post(Controller.addQuickening)
  .put(Controller.updateQuickening)
  .delete(Controller.deleteQuickening);

// Bosses


module.exports = router;