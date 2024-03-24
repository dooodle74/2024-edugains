import pool from './db.js';

const createTable = async () => {
  try {
    await pool.query(`
      
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        isinstructor BOOLEAN NOT NULL DEFAULT FALSE,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        xp INTEGER NOT NULL DEFAULT 0
      )
    `);
    console.log("User table created successfully");
  } catch (err) {
    console.error(err);
  }
};

export default createTable;