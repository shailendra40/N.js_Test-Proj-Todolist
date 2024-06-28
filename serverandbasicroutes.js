const express = require('express');
const app = express();

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Shailendra Ji!');
});

// Route for '/about' URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
