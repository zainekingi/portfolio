/* ================================================
*  FILE:    APP.JS
*  AUTHOR:  Zaine Kingi
*  VER:     1.0
*  DESC:    Main application file for the ZK Design
*           application.
*  -----------------------------------------------
*   CHANGE LOG
*  ...............................................
*
*  -------------------------------------------- */

// Application dependencies.
var express = require ('express'),
    path = require('path'),
    bodyP = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    config = require('./config/database');

/* -----------------------------------------------
*   Database connection
* ============================================= */
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  // Console success message - remove for prod release.
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
  // Console error message.
  console.log('Database error ' + err );
});

/* --------- END: Database connection -------- */

/* ----------------------------------------------
*   Application middleware
* ============================================= */
// Initalise express.
var app = express();

// Instantiate CORS service.
app.use(cors());

// Set the static folder.
app.use(express.static(path.join(__dirname, 'public')));

// Set Body-Parser to use JSON.
app.use(bodyP.json());

/* ----------- END: Middleware config --------- */

/* ----------------------------------------------
 *   Application routes
 * ============================================= */
// Index route.
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

/* ------------- END: Routes config ------------ */

// Set the port.
var port = 3000;

// Set application to listen on port.
app.listen(port, () => { console.log('Server running on ' + port); });
