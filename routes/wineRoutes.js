// routes/userRoutes.js
import express from 'express';
import * as wineControllers from '../controllers/wineControllers.js';
export const route = express.Router();


// READ
route.get('/', wineControllers.listWines);
route.get('/wines', wineControllers.listWines);
route.get('/wine/:id', wineControllers.showWineDetails);
route.get('/json/wine/:id', wineControllers.showWineDetailsJSON);
route.get('/json/wines', wineControllers.listWinesJSON);

route.get('/test', wineControllers.testfunc);

// CREATE
route.get('/new', wineControllers.showNewForm);
route.post('/addnew', wineControllers.createWine);
route.post('/json/addnew', wineControllers.createWine);

// UPDATE
route.get('/:id/edit', wineControllers.showEditForm);
route.post('/:id', wineControllers.updateWine);  // or route.put with method-override

// DELETE
route.post('/:id/delete', wineControllers.deleteWine); // or route.delete

//module.exports = route;
