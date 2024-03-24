

import { Pool } from 'pg';


const pool = new Pool({
  connectionString: 'postgres://otsgiybyqscbqs:36a5c109cdada254557cb8070dba358d3763288e9e7769bc69ccaffd1b8a6050@ec2-44-213-151-75.compute-1.amazonaws.com:5432/dck2gjq5rtmt30',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;