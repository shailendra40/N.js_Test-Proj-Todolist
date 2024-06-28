// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route handler for '/about' URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
