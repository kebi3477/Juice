const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');
const login = require('./routes/login');
const port = 3002;

app.use(bodyParser.json());
app.use('/', index);
app.use('/user', login);

app.listen(port, () => console.log(`Listening on port ${port}`));