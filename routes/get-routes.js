const Controller = require('../controllers/get-controller.js');

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
  app.get('/magick', Controller.getMagickSummary);
  app.get('magic', (req, res) => res.redirect('/magick'));
  
  app.get('/magick/:spell', Controller.getSingleSpell);
  app.get('/magic/:spell', (req, res) => res.redirect(`/magick/:${req.params.spell}`)); // is this the correct way to do this?
  app.get('/magick/:type', Controller.getSingleMagickType);
  app.get('/magic/:type', (req, res) => res.redirect(`/magick/:${req.params.type}`)); // is this correct?

  

  // Armor


  // Weapons


  // Accessories


  // Consumable Items


  // Gambits


  // Techniks


  // Spells


  // Status Effects


  // NPCs


  // Monsters


  // Hunts


  // Licenses


  // Jobs


  // Cities


  // Zones


  // Teleport Crystals


  // Airports


  // Espers


  // Quickenings


  // Bosses


}