const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 7000;

// Global middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Handlers
const api = require('./routes/api');
const auth = require('./routes/auth');

// Serve static files
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css', express.static(path.join(__dirname, 'src', 'public', 'css')));

// Routes
app.use('/api', api);
app.use('/auth', auth);


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
