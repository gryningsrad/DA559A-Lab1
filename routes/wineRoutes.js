// routes/userRoutes.js
const express = require('express');
const route = express.Router();
const wineControllers = require('../controllers/wineControllers');

// READ
route.get('/', wineControllers.listWines);
route.get('/wines', wineControllers.listWines);
route.get('/wine/:id', wineControllers.showWineDetails);
route.get('/test', wineControllers.testfunc);

// CREATE
route.get('/new', wineControllers.showNewForm);
route.post('/addnew', wineControllers.createWine);

// UPDATE
route.get('/:id/edit', wineControllers.showEditForm);
route.post('/:id', wineControllers.updateWine);  // or route.put with method-override

// DELETE
route.post('/:id/delete', wineControllers.deleteWine); // or route.delete

module.exports = route;
