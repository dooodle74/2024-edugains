import pool from './db.js';

const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      )
    `);
    console.log("User table created successfully");
  } catch (err) {
    console.error(err);
  }
};

export default createTable(); //hello