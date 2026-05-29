/*
  Lokaler Test-Server: .local_server.js
  Zweck: Einfacher Node-basierter statischer Server für lokale Entwicklung.
  Verwendung: `node .local_server.js` im Projektordner. Liefert Dateien
  aus dem Arbeitsverzeichnis (root) über HTTP. Diese Datei ist nur ein
  Hilfswerkzeug fürs Testen — Änderungen hier betreffen nicht die Website
  selbst, sondern nur die lokale Bereitstellung.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const root = process.cwd();
const port = process.env.PORT || 8000;

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

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(req.url);
    let safe = decodeURIComponent(parsed.pathname);
    if (safe.endsWith('/')) safe += 'index.html';
    const filePath = path.join(root, safe);
    const ext = path.extname(filePath).toLowerCase();

    if (!filePath.startsWith(root)) {
      res.statusCode = 403; res.end('Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.statusCode = 404; res.end('Not found');
        return;
      }
      res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      stream.on('error', () => { res.statusCode = 500; res.end('Server error'); });
    });
  } catch (e) {
    res.statusCode = 500; res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Static server running at http://localhost:${port}/ (root: ${root})`);
});
