const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/people', require('./controllers/people.js'));
app.use('/cars', require('./controllers/cars.js'));
app.use('/locations', require('./controllers/locations.js'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
console.log('app running error');
app.use(require('./middleware/error'));

module.exports = app;
