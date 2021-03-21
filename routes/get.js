const Controller = require('../controllers/getController.js');

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
  app.get('/magick', Controller.getMagicSummary);
  //app.get('/magic', Controller.magicRedirect);
  // Instead consider using the built in redirect function in express
  app.get('magic', (req, res) => res.redirect('/magick'));
  
  app.get('/magick/:spell', Controller.getSingleSpell);
  app.get('/magic/:spell', Controller.magicRedirect);
  app.get('/magick/:type', Controller.getSingleMagicType);
  app.get('/magic/:type', Controller.magicRedirect);

  

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