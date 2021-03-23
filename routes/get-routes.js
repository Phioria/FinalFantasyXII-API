const Controller = require('../controllers/get-controller.js');

// caseSensitivity is disabled by default which is what we want for our routes
// We'll want to add a controller method for converting db filter params to lowercase, though

// Should i use all these nested routes or just switch to using a query based system
// Or should I make both available.
// Let's go with both for now

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(  // LEARN ABOUT -- took this from my ATM Reports backend....why?
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  // Characters
  app.get('/characters', Controller.getAllCharacters);
  app.get('/characters/:character', Controller.getSingleCharacter);

  // Spells
  app.get('/magick', Controller.getAllMagick);
  app.get('/magic', (req, res) => res.redirect('/magick'));
  app.get('/magick/:spell', Controller.getSingleSpell);
  app.get('/magic/:spell', (req, res) => res.redirect(`/magick/${req.params.spell}`)); // is this the correct way to do this?
  app.get('/magick/:type', Controller.getSingleMagickType);
  app.get('/magic/:type', (req, res) => res.redirect(`/magick/${req.params.type}`)); // is this correct?

  // Armor
  app.get('/armor', Controller.getAllArmor);
  app.get('/armor/:type', Controller.getSingleArmorType);
  app.get('/armor/:item', Controller.getSingleArmorItem);

  // Weapons
  app.get('/weapons', Controller.getAllWeapons);
  app.get('/weapons/:type', Controller.getSingleWeaponType);
  app.get('/weapons/:item', Controller.getSingleWeapon);

  // Accessories
  app.get('/accessories', Controller.getAllAccessories);
  app.get('/accessories/:item', Controller.getSingleAccessory);

  // Consumable Items
  app.get('/items', Controller.getAllItems);
  app.get('/items/:item', Controller.getSingleItem);

  // Gambits
  app.get('/gambits', Controller.getAllGambits);
  app.get('/gambits/:gambit', Controller.getSingleGambit);

  // Techniks
  app.get('/techniks', Controller.getAllTechniks);
  app.get('/techniks/:technik', Controller.getSingleTechnik);

  // Status Effects
  app.get('/status-effects', Controller.getAllStatusEffects);
  app.get('/status-effects/:effect', Controller.getSingleStatusEffect);

  // NPCs


  // Monsters


  // Hunts


  // Licenses


  // Jobs


  // Cities
  app.get('/cities', Controller.getAllCities);
  app.get('/cities/city', Controller.getSingleCity);

  // Zones


  // Teleport Crystals


  // Airports


  // Espers


  // Quickenings
  app.get('/quickenings', Controller.getAllQuickenings);
  app.get('/quickenings/:character', Controller.getQuickeningsByCharacter);
  app.get('/quickenings/:quickening', Controller.getSingleQuickening);

  // Bosses


}