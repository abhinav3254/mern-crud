const express = require('express');
require('./db');
const PORT = 8080;

const cors = require('cors');

// Enable CORS for all routes
app.use(cors());


const routes = require('./routes/routes');  // Import the router

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use the router from routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`server is listening on port number ${PORT}`);
});
