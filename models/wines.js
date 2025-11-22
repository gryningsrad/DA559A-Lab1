const db = require('../database').conn;

async function getAllWines() {
  const sql = 'SELECT * FROM wines';
  const [rows] = await conn.query(sql);
  return rows;
}

async function getByWineId(wineId) {
  const sql = 'SELECT * FROM wines WHERE id = ?';
  const [rows] = await conn.query(sql, [wineId]);
  return rows[0];
}

async function createWine(wineData) {
  const sql = 'INSERT INTO wines (name, vintage, quantity, price) VALUES (?, ?, ?, ?)';
  const { name, vintage, quantity, price } = wineData;
  const [result] = await conn.query(sql, [nname, vintage, quantity, price]);
  return result.insertId;
}

async function updateWine(wineId, wineData) {
  const sql = 'UPDATE wines SET name = ?, vintage = ?, quantity = ?, price = ? WHERE id = ?';
  const { name, vintage, quantity, price } = wineData;
  const [result] = await conn.query(sql, [name, vintage, quantity, price, wineId]);
  return result.affectedRows;
}

async function deleteWine(wineId) {
  const sql = 'DELETE FROM wines WHERE id = ?';
  const [result] = await conn.query(sql, [wineId]);
  return result.affectedRows;
}

module.exports = {
  getAllWines,
  getByWineId,
  createWine,
  updateWine,
  deleteWine
};