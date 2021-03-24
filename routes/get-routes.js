const Controller = require('../controllers/get-controller.js');
const express = require('express');
const router = express.Router();


// caseSensitivity is disabled by default which is what we want for our routes
// We'll want to add a controller method for converting db filter params to lowercase, though

// Should i use all these nested routes or just switch to using a query based system
// Or should I make both available.
// Let's go with both for now

    
// Characters
router.get('/characters', Controller.getAllCharacters);
router.get('/characters/:character', Controller.getSingleCharacter);

// Spells
router.get('/magick', Controller.getAllMagick);
router.get('/magic', (req, res) => res.redirect('/magick'));
router.get('/magick/:spell', Controller.getSingleSpell);
router.get('/magic/:spell', (req, res) => res.redirect(`/magick/${req.params.spell}`)); // is this the correct way to do this?
router.get('/magick/:type', Controller.getSingleMagickType);
router.get('/magic/:type', (req, res) => res.redirect(`/magick/${req.params.type}`)); // is this correct?

// Armor
router.get('/armor', Controller.getAllArmor);
router.get('/armor/:type', Controller.getSingleArmorType);
router.get('/armor/:item', Controller.getSingleArmorItem);

// Weapons
router.get('/weapons', Controller.getAllWeapons);
router.get('/weapons/:type', Controller.getSingleWeaponType);
router.get('/weapons/:item', Controller.getSingleWeapon);

// Accessories
router.get('/accessories', Controller.getAllAccessories);
router.get('/accessories/:item', Controller.getSingleAccessory);

// Consumable Items
router.get('/items', Controller.getAllItems);
router.get('/items/:item', Controller.getSingleItem);

// Gambits
router.get('/gambits', Controller.getAllGambits);
router.get('/gambits/:gambit', Controller.getSingleGambit);

// Techniks
router.get('/techniks', Controller.getAllTechniks);
router.get('/techniks/:technik', Controller.getSingleTechnik);

// Status Effects
router.get('/status-effects', Controller.getAllStatusEffects);
router.get('/status-effects/:effect', Controller.getSingleStatusEffect);

// NPCs


// Monsters


// Hunts


// Licenses


// Jobs


// Cities
router.get('/cities', Controller.getAllCities);
router.get('/cities/city', Controller.getSingleCity);

// Zones


// Teleport Crystals


// Airports


// Espers


// Quickenings
router.get('/quickenings', Controller.getAllQuickenings);
router.get('/quickenings/:character', Controller.getQuickeningsByCharacter);
router.get('/quickenings/:quickening', Controller.getSingleQuickening);

// Bosses


module.exports = router;