const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT,'127.0.0.1',() => {
    console.log('Server is listening on 127.0.0.1:'+PORT);
});