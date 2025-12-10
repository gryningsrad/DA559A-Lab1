const db = require('./database').conn;
const mysql = require('mysql2/promise');

const sql = "SELECT * FROM wines AS result";

const [resultset] = db.query(sql);

console.table(resultset);