import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:     process.env.DB_PORT,
    database: process.env.DB_NAME,
    multipleStatements: true
});

const sql = `SELECT * from wines;`;

const [resultset] = await db.execute(sql);
console.table(resultset);


const sql2 = `SELECT * from producers;`;

const [resultset2] = await db.execute(sql2);
console.table(resultset2);


db.close();