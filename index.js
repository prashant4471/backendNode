const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT,'127.0.0.1',() => {
    console.log('Server is listening on 127.0.0.1:'+PORT);
});