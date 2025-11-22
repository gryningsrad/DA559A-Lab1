const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./database').conn;

app.use(express.static('static'));
app.set('view engine', 'ejs')

app.get('/', async(req, res) => {
  
  try {
    console.log("Trying to query the database");
    // For pool initialization, see above
    
    const [rows] = await db.query('SELECT * FROM wines AS result');
    console.log('DB OK:', rows);

  } catch (err) {
    console.log(err);
  }

  res.send('Hello World from Lab1! OR=!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});