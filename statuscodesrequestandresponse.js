// Setting status code in response
app.get('/error', (req, res) => {
    // Code to handle error condition
    res.status(404).send('Not Found');
  });
  