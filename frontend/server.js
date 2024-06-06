const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Middleware
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "http://localhost:5000"]
  }
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.post('/api/products', (req, res) => {
  // Handle the POST request to add a new product
  // You can access the product data from req.body
  // Perform any necessary validation and save the product to the database
  // Send an appropriate response back to the client
  res.json({ message: 'Product added successfully' });
});

// Catch-all route to serve the index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Frontend server is running on port ${port}`);
});
