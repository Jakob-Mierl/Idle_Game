const express = require('express');
var path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(`Listening on localhost:${PORT}`);
    res.render(path.join(__dirname, 'views'));
})

app.listen(PORT);