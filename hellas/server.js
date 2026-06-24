const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const { pool, ping } = require('./db');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
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
    if (key && (!Object.prototype.hasOwnProperty.call(process.env, key) || process.env[key] === '')) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.join(__dirname, '.env'));

const root = __dirname;
const port = Number(process.env.PORT || 3000);

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.json': 'application/json; charset=utf-8'
};

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload, null, 2));
}

async function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function handleApi(req, res, urlObject) {
  if (req.method === 'GET' && urlObject.pathname === '/api/health') {
    try {
      await ping();
      sendJson(res, 200, { ok: true, database: 'connected' });
    } catch (error) {
      sendJson(res, 500, { ok: false, database: 'disconnected', error: error.message });
    }
    return true;
  }

  if (req.method === 'GET' && urlObject.pathname === '/api/destinations') {
    const type = urlObject.searchParams.get('type');
    let sql = 'SELECT id, type, slug, name, region, subtitle, description, image_path, detail_path FROM destinations';
    const params = [];

    if (type) {
      sql += ' WHERE type = ?';
      params.push(type);
    }

    sql += ' ORDER BY sort_order ASC, id ASC';

    const [rows] = await pool.query(sql, params);
    sendJson(res, 200, rows);
    return true;
  }

  if (req.method === 'GET' && urlObject.pathname.startsWith('/api/destinations/')) {
    const parts = urlObject.pathname.split('/').filter(Boolean);
    const type = parts[2];
    const slug = parts[3];

    if (!type || !slug) {
      sendJson(res, 400, { error: 'Missing type or slug' });
      return true;
    }

    const [rows] = await pool.query(
      'SELECT id, type, slug, name, region, subtitle, description, image_path, detail_path FROM destinations WHERE type = ? AND slug = ? LIMIT 1',
      [type, slug]
    );

    if (rows.length === 0) {
      sendJson(res, 404, { error: 'Destination not found' });
      return true;
    }

    sendJson(res, 200, rows[0]);
    return true;
  }

  if (req.method === 'POST' && urlObject.pathname === '/api/destinations') {
    const bodyText = await readBody(req);
    let body;

    try {
      body = JSON.parse(bodyText || '{}');
    } catch {
      sendJson(res, 400, { error: 'Invalid JSON body' });
      return true;
    }

    const required = ['type', 'slug', 'name'];
    const missing = required.filter((key) => !body[key]);
    if (missing.length) {
      sendJson(res, 400, { error: `Missing fields: ${missing.join(', ')}` });
      return true;
    }

    const result = await pool.execute(
      `INSERT INTO destinations
       (type, slug, name, region, subtitle, description, image_path, detail_path, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.type,
        body.slug,
        body.name,
        body.region || null,
        body.subtitle || null,
        body.description || null,
        body.image_path || null,
        body.detail_path || null,
        Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0
      ]
    );

    sendJson(res, 201, { ok: true, id: result[0].insertId });
    return true;
  }

  return false;
}

function serveStatic(req, res, urlObject) {
  let requestPath = decodeURIComponent(urlObject.pathname);
  if (requestPath === '/') requestPath = '/index.html';
  if (requestPath.endsWith('/')) requestPath += 'index.html';

  const filePath = path.normalize(path.join(root, requestPath));
  if (!filePath.startsWith(root)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    res.setHeader('Content-Type', mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
    fs.createReadStream(filePath)
      .on('error', () => {
        res.statusCode = 500;
        res.end('Server error');
      })
      .pipe(res);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const urlObject = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (urlObject.pathname.startsWith('/api/')) {
      const handled = await handleApi(req, res, urlObject);
      if (handled) {
        return;
      }
      sendJson(res, 404, { error: 'Unknown API route' });
      return;
    }

    serveStatic(req, res, urlObject);
  } catch (error) {
    sendJson(res, 500, { error: 'Server error', detail: error.message });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
