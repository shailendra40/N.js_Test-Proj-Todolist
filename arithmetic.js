// arithmetic.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Create a pool for handling database connections
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: '1234', // Update with your actual password
    port: 5432,
});

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function percentage(num1, num2) {
    if (parseFloat(num1) === 0) {
        throw new Error('Number 1 cannot be zero');
    }
    return (parseFloat(num2) / parseFloat(num1)) * 100;
}

app.post('/calculate', (req, res) => {
    const { num1, num2, operator} = req.body;
    let result=0;
    switch(operator) {
        case '+':
            result = add(num1, num2);
            break;
            // case "+":
            // result = num1 + num2;
            // break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        case 'modulus':
        result = modulus(num1, num2);
            break;
        case 'percentage':
        result = percentage(num1, num2);
            break;
        default:
            result = 'Invalid operator';
    }
    if (result == 'Invalid operator') {
        return res.status(400).json({ error: 'Invalid operator' });
    }
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', [operator, num1, num2, result], (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform operation', dbError: error.message });
        }
    });
    return res.json({ result });
});

// Route for performing addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) + parseFloat(num2);
    // Store result in the database
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['addition', num1, num2, result], (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform addition', dbError: error.message }); // Add dbError property
        } else {
            res.json({ result });
        }
    });
});

// Route for performing subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) - parseFloat(num2);
    // Store result in the database
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['subtraction', num1, num2, result], (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform subtraction', dbError: error.message }); // Add dbError property
        } else {
            res.json({ result });
        }
    });
});

// Route for performing multiplication
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) * parseFloat(num2);
    // Store result in the database
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['multiplication', num1, num2, result], (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform multiplication', dbError: error.message });
        } else {
            res.json({ result });
        }
    });
});

// Route for performing division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) / parseFloat(num2);
    // Store result in the database
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['division', num1, num2, result], (error, queryResult) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform division', dbError: error.message });
        } else {
            res.json({ result }); // Return the result directly, without wrapping it in an object
        }
    });
});

// Route for performing modulus
app.post('/modulus', (req, res) => {
    const { num1, num2 } = req.body;

    console.log('Received num1:', num1);
    console.log('Received num2:', num2);

    // Check if num2 is zero
    if (parseFloat(num2) === 0) {
        console.log('Divisor is zero. Cannot perform modulus operation.');
        return res.status(400).json({ error: 'Cannot perform modulus operation: divisor cannot be zero' });
    }

    // Calculate the modulus
    const result = parseFloat(num1) % parseFloat(num2);

    console.log('Calculated Modulus result:', result);

    // Return the result as a JSON response
    return res.json({ result });
});

// Route for performing percentage
app.post('/percentage', (req, res) => {
    const { num1, num2 } = req.body;

    // Check if num1 is zero to avoid division by zero
    if (parseFloat(num1) === 0) {
        return res.status(400).json({ error: 'Number 1 cannot be zero' });
    }

    const result = (parseFloat(num2) / parseFloat(num1)) * 100;

    // Store result in the database
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['percentage', num1, num2, result], (error, result) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to calculate percentage', dbError: error.message });
        } else {
            res.json({ result });
        }
    });
});

app.post('/add', (req, res) => {
    const result = parseFloat(req.body.num1) + parseFloat(req.body.num2);
    pool.query('INSERT INTO shailen(operation, num1, num2, result) VALUES($1, $2, $3, $4)', ['addition', req.body.num1, req.body.num2, result], (error, queryResult) => {
        if (error) {
            console.error('Error executing query', error);
            return res.status(500).json({ error: 'Failed to perform addition', dbError: error.message });
        } else {
            res.json({ result: result }); // Return the calculated result
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
