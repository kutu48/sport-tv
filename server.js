const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'video' directory
app.use('/video', express.static(path.join(__dirname, 'video')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
