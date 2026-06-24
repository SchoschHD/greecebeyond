# Hellas MySQL Setup

1. Install dependencies in this folder:

```bash
npm install
```

2. Create the database and seed data:

```bash
mysql -u root -p < db/schema.sql
```

3. Copy `.env.example` to `.env` and adjust the MySQL credentials.

4. Start the app:

```bash
npm start
```

The site will run at `http://localhost:3000/`.

Available API routes:

- `GET /api/health`
- `GET /api/destinations`
- `GET /api/destinations?type=island`
- `GET /api/destinations/island/santorini`
- `POST /api/destinations`
