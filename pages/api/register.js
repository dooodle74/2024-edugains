// pages/api/register.js
import pool from '@/lib/db.js'; // Import the database connection

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { isinstructor, username, password } = req.body;

    try {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO users (username, password, isinstructor) VALUES ($1, $2, $3) RETURNING *',
        [username, password, isinstructor]
      );
      client.release(); // Release the client back to the pool
      res.status(201).json({ user: result.rows[0] });
    } catch (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}