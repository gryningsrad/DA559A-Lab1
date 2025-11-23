// controllers/WineController.js
const { test } = require('../database');
const Wine = require('../models/wineModels');

//async function listWines(req, res, next) {
async function listWines(req, res, next) {  
  //console.log("Listing wines - wineControllers");
  try {
    const Wines = await Wine.getAllWines();
    console.log(Wines)
    res.render('wines/main', { Wines });
  } catch (err) {
    next(err);
  }
}

async function showWineDetails(req, res, next) {
  try {
    const wine = await Wine.getWineById(req.params.id);
    //console.log("wineDetails with ID: " + req.params.id)
    if (!wine) return res.status(404).send('Wine not found');
    res.render('wines/wineDetail', { wine });
  } catch (err) {
    next(err);
  }
}

function testfunc(req, res, next) {
  console.log("Testing birds controller");
  res.send('Birds home page testing')
}

async function showNewForm(req, res) {
  res.render('wines/new');
}

async function createWine(req, res, next) {
  try {
    console.log("CreateWine body: " + req.body)
    await Wine.createWine(req.body);
    res.redirect('/wines');
  } catch (err) {
    next(err);
  }
}

async function showEditForm(req, res, next) {
  try {
    const Wine = await Wine.getWineById(req.params.id);
    if (!Wine) return res.status(404).send('Wine not found');
    res.render('wines/edit', { Wine });
  } catch (err) {
    next(err);
  }
}

async function updateWine(req, res, next) {
  try {
    await Wine.updateWine(req.params.id, req.body);
    res.redirect('/wines');
  } catch (err) {
    next(err);
  }
}

async function deleteWine(req, res, next) {
  try {
    await Wine.deleteWine(req.params.id);
    res.redirect('/wines');
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listWines,
  showWineDetails,
  testfunc,
  showNewForm,
  createWine,
  showEditForm,
  updateWine,
  deleteWine
};