import logger from 'morgan';
import express from 'express';
import path from 'path';
import { conn } from './database.js';
import { route as wineRoutes } from './routes/wineRoutes.js';
import { error } from 'console';
import { ask, rl } from './menu/interface.js';
import { stdin as input, stdout as output } from 'process';
import { getUserChoice as menu, runMenu } from './menu/menu.js';

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;

//const db = require('./database').conn;

// Use Logger
app.use(logger('dev'))

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', wineRoutes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.route('/wines', wineRoutes.route);

app.get('/', (req, res) => {
  //console.log("Redirecting to /wines");
  res.redirect('/wines');
});

// 404 error handler (from week 02)
app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
});

// Global error handler (from week 02)
app.use((err, req, res, next) => {
  const status = err.status || 500
  console.error(err)
  res.status(status).json({
    status,
    message: err.message
  });
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

server.on(error, (err) => {
  console.error(`Server error ${err}`);
});

// Here we will start our CLI-service
// First we will give the user a choice to start the CLI functionality

function showMenuPrompt() {
  // console.clear();
  console.log("Would you like to enter the CLI menu?");
  console.log("1. Yes");
  console.log("2. No (default)");
  getUserChoice();
}

async function getUserChoice() {
  const choice = await ask("Please select option: ");

  switch (choice) {
  case '1':
    await runMenu();
    break;
  default:
    break;
  } 
  rl.close();
}

showMenuPrompt();

function shutdown() {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
