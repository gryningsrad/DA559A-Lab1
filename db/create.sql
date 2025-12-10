-- Create two tables in the database: wines and producers.
-- Populate the tables with 5 wines and 2 producers.

DROP database IF EXISTS wine_store;
CREATE database wine_store;
USE wine_store;

DROP TABLE IF EXISTS wines;
DROP TABLE IF EXISTS producers;

Create TABLE producers (
    id INT PRIMARY KEY,
    name VARCHAR(500) NOT NULL,
    country VARCHAR(30) NOT NULL,
    email VARCHAR(60) NOT NULL
);

CREATE TABLE wines (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    producer_id INT,
    vintage INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2),
    FOREIGN KEY (producer_id) REFERENCES producers(id)
);

INSERT INTO producers (id, name, country, email) VALUES
(1, 'Terre de la Custodia', 'Italy', 'stefano@faccioni.it'),
(2, 'Degucnano dei Barbi', 'Italy', 'enzo@barbi.it');

INSERT INTO wines (name, producer_id, vintage, quantity, price) VALUES
('Rubium', 1, 2018, 50, 29.99),
('Montefalco Grechetto', 1, 2017, 30, 49.99),
('Blanchus', 1, 2019, 40, 39.99),
('Battito', 2, 2020, 60, 24.99),
('Frammento', 2, 2021, 70, 19.99);