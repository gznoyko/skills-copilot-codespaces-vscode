// Create web server
// Create a post route for new comments
// Create a get route for all comments
// Create a get route for a specific comment
// Create a put route for updating a comment
// Create a delete route for deleting a comment

// Path: comments.js
const express = require('express');
const router = express.Router();

// Create a post route for new comments
router.post('/', (req, res) => {
    res.send('Post route for new comments');
});

// Create a get route for all comments
router.get('/', (req, res) => {
    res.send('Get route for all comments');
});

// Create a get route for a specific comment
router.get('/:id', (req, res) => {
    res.send('Get route for a specific comment');
});

// Create a put route for updating a comment
router.put('/:id', (req, res) => {
    res.send('Put route for updating a comment');
});

// Create a delete route for deleting a comment
router.delete('/:id', (req, res) => {
    res.send('Delete route for deleting a comment');
});

module.exports = router;

// Path: app.js
const express = require('express');
const app = express();
const comments = require('./comments');

app.use('/comments', comments);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Path: package.json
{
  "name": "comments-app",
  "version": "1.0.0",
  "description": "A simple app to create, read, update, and delete comments",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

// Run the server
// node app.js

// Test the routes using a tool like Postman or curl
// POST http://localhost:3000/comments
// GET http://localhost:3000/comments
// GET http://localhost:3000/comments/1
// PUT http://localhost:3000/comments/1
// DELETE http://localhost:3000/comments/1

// You can also test the routes using a browser if you set them up to return HTML or JSON responses.

// Create, Read, Update