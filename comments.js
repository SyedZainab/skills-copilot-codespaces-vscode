// Create web server using Express.js
// Create a comment box
// Add a comment to the box
// Display the comment
// When the user enters a comment, the comment will be displayed on the page

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'comment.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});