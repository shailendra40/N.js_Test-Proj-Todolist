const { Client } = require('pg');

// Connection configuration
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

// Query to retrieve data
const query = 'SELECT * FROM shailen';

// Execute the query
client.query(query)
  .then(result => {
    const rows = result.rows;
    console.log('Retrieved data:', rows);
  })
  .catch(error => console.error('Error executing query', error))
  .finally(() => {
    // Close the client connection
    client.end()
      .then(() => console.log('Disconnected from PostgreSQL'))
      .catch(error => console.error('Error disconnecting from PostgreSQL', error));
  });
