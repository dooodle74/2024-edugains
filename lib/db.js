

import { Pool } from 'pg';


const pool = new Pool({
  connectionString: 'postgres://otsgiybyqscbqs:36a5c109cdada254557cb8070dba358d3763288e9e7769bc69c',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;