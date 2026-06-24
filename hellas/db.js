const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

function readEnvFile(filePath) {
  const result = {};
  if (!fs.existsSync(filePath)) {
    return result;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) {
      continue;
    }

    const equalsIndex = line.indexOf('=');
    if (equalsIndex === -1) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    const value = line.slice(equalsIndex + 1).trim();
    if (key) {
      result[key] = value;
    }
  }

  return result;
}

const fileEnv = readEnvFile(path.join(__dirname, '.env'));
const env = (key, fallback) => {
  const value = fileEnv[key];
  if (value !== undefined && value !== '') {
    return value;
  }
  if (process.env[key] !== undefined && process.env[key] !== '') {
    return process.env[key];
  }
  return fallback;
};

const pool = mysql.createPool({
  host: env('MYSQL_HOST', 'localhost'),
  port: Number(env('MYSQL_PORT', 3306)),
  user: env('MYSQL_USER', 'root'),
  password: env('MYSQL_PASSWORD', ''),
  database: env('MYSQL_DATABASE', 'hellas'),
  waitForConnections: true,
  connectionLimit: Number(env('MYSQL_CONNECTION_LIMIT', 10)),
  queueLimit: 0
});

async function ping() {
  const connection = await pool.getConnection();
  try {
    await connection.ping();
  } finally {
    connection.release();
  }
}

module.exports = {
  pool,
  ping
};
