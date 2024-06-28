// Dynamic route
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Code to fetch user data based on userId
    res.send(`User ID: ${userId}`);
  });
  