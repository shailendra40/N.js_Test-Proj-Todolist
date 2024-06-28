// // Import required modules
// const express = require('express');

// // Create an Express application
// const app = express();
// const port = 3000;

// // Middleware: Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Set the view engine to EJS
// app.set('view engine', 'ejs');

// // Define a route handler for the root URL
// app.get('/', (req, res) => {
//   res.render('index');
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });


const express = require('express');


const router = require('./router');

const app = express();



// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route to retrieve data from the database and render an EJS template
app.use("/user", router)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
