const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
console.log('app running app route');
app.use('/people', require('./controllers/people.js'));
console.log('app running not found');

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
console.log('app running error');
app.use(require('./middleware/error'));

module.exports = app;
