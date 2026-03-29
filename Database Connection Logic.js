const { Pool } = require('pg');
require('dotenv').config();

// Railway provides the connection string automatically
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Railway/Render
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server blasting off on port ${PORT}`));
