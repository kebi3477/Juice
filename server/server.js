const express = require('express');
const app = express();
const index = require('./routes/index');
const login = require('./routes/login');
const port = 3002;

app.use('/', index);
app.use('/login', login);

app.listen(port, () => console.log(`Listening on port ${port}`));