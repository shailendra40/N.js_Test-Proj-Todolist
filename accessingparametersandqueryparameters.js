// Accessing parameters and query parameters
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    const category = req.query.category;
    // Code to fetch product data based on productId and category
    res.send(`Product ID: ${productId}, Category: ${category}`);
  });
  