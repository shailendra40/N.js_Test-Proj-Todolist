const { Client } = require('pg');
const router = require('express').Router();

// PostgreSQL connection configuration
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: '1234',
    port: 5432, // Default PostgreSQL port
  });
  
  // Connect to the PostgreSQL server
  client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(error => console.error('Error connecting to PostgreSQL', error));

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/accessingparametersandqueryparameters', function (req, res, next) {
    console.log("Accessingparametersandqueryparameters Router Working");
    res.end();
});

router.get('/app', async (req, res) => {
    try {
      // Query to retrieve data from your_table
      const query = 'SELECT * FROM shailen';
  
      // Execute the query
      const result = await client.query(query);
  
      // Render the 'index.ejs' template with the retrieved data
      res.render('index', { data: result.rows });
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

router.get('/arithmetic', function (req, res, next) {
    console.log("Arithmetic Router Working");
    res.end();
});
 
router.get('/dynamicroutes', function (req, res, next) {
    console.log("Dynamicroutes Router Working");
    res.end();
});

router.get('/function', function (req, res, next) {
    console.log("Function Router Working");
    res.end();
});

router.get('/httpRequest', function (req, res, next) {
    console.log("HttpRequest Router Working");
    res.end();
});

router.get('/loop', function (req, res, next) {
    console.log("Loop Router Working");
    res.end();
});

router.get('/postgresQuery', function (req, res, next) {
    console.log("PostgresQuery Router Working");
    res.end();
});

router.get('/requestbody', function (req, res, next) {
    console.log("Requestbody Router Working");
    res.end();
});

router.get('/requestvalidation', function (req, res, next) {
    console.log("Requestvalidation Router Working");
    res.end();
});

router.get('/routespecificopr', function (req, res, next) {
    console.log("Routespecificopr Router Working");
    res.end();
});

router.get('/server', function (req, res, next) {
    console.log("Server Router Working");
    res.end();
});

router.get('/serverandbasicroutes', function (req, res, next) {
    console.log("Serverandbasicroutes Router Working");
    res.end();
});

router.get('/serverexpress', function (req, res, next) {
    console.log("Serverexpress Router Working");
    res.end();
});

router.get('/statuscodesrequestandresponse', function (req, res, next) {
    console.log("Statuscodesrequestandresponse Router Working");
    res.end();
});

router.get('/variable', function (req, res, next) {
    console.log("Variable Router Working");
    res.end();
});

// export default router;
module.exports = router;