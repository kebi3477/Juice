const express = require('express');
const app = express();
const index = require('./routes/index.js');
const port = 3002;

app.use('/', index);

app.listen(port, () => console.log(`Listening on port ${port}`));