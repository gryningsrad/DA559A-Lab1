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

async function runSQL(sql) {
	console.log("Running SQL:\n", sql);
	const [resultset] = await db.execute(sql);
	console.table(resultset);
}

runSQL(`DROP TABLE IF EXISTS wines;`)
runSQL(`DROP TABLE IF EXISTS producers;`);
//runSQL(`USE wine_store;`);

runSQL(`CREATE TABLE producers (
		id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(100) NOT NULL,
		country VARCHAR(100) NOT NULL,
		email VARCHAR(100) NOT NULL
);`);

runSQL(`CREATE TABLE wines (
		id INT AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(100) NOT NULL, 
		producer_id INT,
		vintage INT,
		quantity INT NOT NULL,
		price DECIMAL(10, 2),
		FOREIGN KEY (producer_id) REFERENCES producers(id)
);`);

runSQL(`INSERT INTO producers (id, name, country, email) VALUES
	(1, 'Terre de la Custodia', 'Italy', 'stefano@terre.it'),
	(2, 'Degucnano dei Barbi', 'Italy', 'enzo@barbi.it');`);

runSQL(`INSERT INTO wines (name, producer_id, vintage, quantity, price) VALUES
	('Rubium', 1, 2018, 50, 29.99),
	('Rosso di Montalcino', 2, 2019, 30, 49.99),
	('Blanchus', 1, 2019, 40, 39.99),
	('Battito', 2, 2020, 60, 24.99),
	('Frammento', 2, 2021, 70, 19.99);`);

const sql = `SELECT * from wines;`;

const [resultset] = await db.execute(sql);
console.table(resultset);

db.close();