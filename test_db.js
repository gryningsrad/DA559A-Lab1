// test-db.js
const db = require('./database').conn;

async function test() {
  try {
    const [rows] = await db.query('SELECT * FROM wines AS result');
    console.log('DB OK:', rows);
  } catch (err) {
    console.error('DB ERROR:', err);
  }
}

test();
