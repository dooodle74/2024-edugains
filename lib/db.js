

import { Pool } from 'pg';


const pool = new Pool({
  connectionString: 'postgres://rtdndnxaicftbk:081ee3066b4bb337db00220407d0c7aabd46440cd52591b9d66e2b3464970a4c@ec2-107-21-67-46.compute-1.amazonaws.com:5432/d1a2kht67sl9rv',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;