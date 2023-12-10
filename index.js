const express = require('express');
const app = express();
var router = require('./router');

const bodyParser = require('body-parser');
const connectDB = require('./db/mongo');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router);

connectDB();

const PORT = 3000;
app.listen(PORT,'127.0.0.1',() => {
    console.log('Server is listening on 127.0.0.1:'+PORT);
});