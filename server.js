const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const db = require('./database').conn;
const wineRoutes = require('./routes/wineRoutes')

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', wineRoutes)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.route('/wines', wineRoutes.route);

app.get('/', (req, res) => {
  console.log("Redirecting to /wines");
  res.redirect('/wines');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});