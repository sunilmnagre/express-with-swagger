'use strict';

const express = require('express');
const cors = require('cors');
const jsend = require('jsend');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./functions/api-docs/swagger.js');
const firebaseConfig = require('./functions/config/default');
const config = require('config');
const app = express();

// Setup express server port from ENV, default: 3334
const port = process.env.PORT || 3333

// For parsing json
app.use(express.json({ limit: '20mb' }));

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true,
  limit: '20mb'
}));

// Init all other stuff
app.use(cors());
app.use(jsend.middleware);

// API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

// Send welcome message on landing API call
app.get('/', (req, res) => {
  res.send(`<br><br>
  Welcome to conteNXT APIs
  <br>
  Firebase Database connected - <b>${firebaseConfig.sanity.dataset}</b>
  <br>
  Stage Database connected - <b>${config.sanity.dataset}</b>
  `);
});

// Expose all the routes
app.use('/api', require('./functions/app/routes/index'));

// Start the application
app.listen(port, () => {
  console.info('\nApplication has been started on port: ' + port);
});

module.exports = app;