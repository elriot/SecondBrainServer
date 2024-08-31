const express = require('express');
const app = express();
const port = 3000;

// npx nodemon server.js
// const cors = require('cors');
// app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});