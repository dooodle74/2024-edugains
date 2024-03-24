import pool from './db.js';

const createTable = async () => {
  const result = await pool.query('SELECT * FROM Users');
    console.log(result.rows);
  // try {

   
    
  //   await pool.query(`
      
  //     CREATE TABLE IF NOT EXISTS Users (
  //       id SERIAL PRIMARY KEY,
  //       isInstructor BOOLEAN NOT NULL DEFAULT FALSE,
  //       username VARCHAR(50) UNIQUE NOT NULL,
  //       password VARCHAR(100) NOT NULL,
  //       xp INTEGER NOT NULL DEFAULT 0,
    
  //     )
  //   `);
  //   console.log("User table created successfully");
  // } catch (err) {
  //   console.error(err);
  // }
};

export default createTable(); //hello