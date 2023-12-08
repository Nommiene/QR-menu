const express = require('express');
const path = require('path'); // Import the path module

const app = express();
const PORT = process.env.PORT || 3001;
// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/')));

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT,'172.16.151.74', () => {
    console.log(`Server running at 'http:// 172.16.151.74:${PORT}`);
  });

