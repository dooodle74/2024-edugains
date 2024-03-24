import pool from '@/lib/db.js'; // Import the database connection

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { isinstructor, username, password } = req.body;

    try {
      // Check if the username already exists in the database
      const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      if (existingUser.rows.length > 0) {
        // Username already exists, return an error response
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Proceed with user registration if the username is unique
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