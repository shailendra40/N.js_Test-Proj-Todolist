// Request validation middleware
function validateRequest(req, res, next) {
    if (!req.query.name) {
      return res.status(400).send('Name parameter is required');
    }
    next();
  }
  
  // Using request validation middleware
  app.get('/api/resource', validateRequest, (req, res) => {
    // Code to handle valid requests
    res.send(`Resource requested: ${req.query.name}`);
  });
  