// db.js (or any other name you prefer)
const { Pool } = require('pg');

// Get database URL from environment variable
const connectionString = process.env.DATABASE_URL;

// Create a new Pool instance using the connection string
const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false // For development purposes only; remove in production
  }
});

module.exports = pool;