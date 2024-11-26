// Simple node server
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
// NOTE: change _site with whatever directory you output your built site to
app.use(express.static(path.join(__dirname, '_site')));

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, message } = req.body;

    // Save the form data to a file
    const logMessage = `Name: ${name}\nMessage: ${message}\n\n`;
    fs.appendFile('submissions', logMessage, (err) => {
        if (err) {
            res.status(500).send('Error saving form data');
            return;
        }
        res.redirect('/success');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
