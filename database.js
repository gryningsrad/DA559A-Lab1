import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

/**
 * const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}); 
**/

dotenv.config();

export function test() {
  console.log("Database connection test");
};

export const conn = mysql.createPool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

//module.exports = { test, conn };
//module.conn = conn;