const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');
const user = require('./routes/user');
const group = require('./routes/group');
const port = 3002;

app.use(session({
    secret: 'juicekdmjyhkjykhkhwwlhhknh',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}))
app.use(bodyParser.json());
app.use('/', index);
app.use('/user', user);
app.use('/group', group);

app.listen(port, () => console.log(`Listening on port ${port}`));