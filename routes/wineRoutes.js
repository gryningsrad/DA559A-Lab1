// routes/userRoutes.js
import express from 'express';
import * as wineControllers from '../controllers/wineControllers.js';
export const route = express.Router();


// READ
route.get('/', wineControllers.listWines);
route.get('/wines', wineControllers.listWines);
route.get('/wines/:id', wineControllers.showWineDetails);
route.get('/wines/supplier/:id', wineControllers.listWinesBySupplier);
route.get('/wines/inventory/:id', wineControllers.showWineInventory);
route.get('/api/wines/:id', wineControllers.showWineDetailsJSON);
route.get('/api/wines', wineControllers.listWinesJSON);
route.get('/api/wines/:id/producer', wineControllers.listWineProducerJSON);
route.get('/api/wines/:id/inventory', wineControllers.getWineInventoryJSON);

route.get('/test', wineControllers.testfunc);

// CREATE
route.get('/new', wineControllers.showNewForm);
route.post('/addnew', wineControllers.createWine);
route.post('/api/addnew', wineControllers.createWine);

// UPDATE
route.get('/:id/edit', wineControllers.showEditForm);
route.post('/:id', wineControllers.updateWine);  // or route.put with method-override

// DELETE
route.post('/:id/delete', wineControllers.deleteWine); // or route.delete

//module.exports = route;
