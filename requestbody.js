// Parsing request body
app.use(express.json()); // Middleware to parse JSON bodies

// Route to handle POST requests with request body
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  // Code to create a new product using data from request body
  res.send(`New product created: ${name} - ${price}`);
});
