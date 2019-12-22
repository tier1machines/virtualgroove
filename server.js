const path = require('path');
const express = require('express');
const app = express();

const PORT = 7000;

// Serve static files
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/css',express.static(path.join(__dirname, 'src', 'public', 'css')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
