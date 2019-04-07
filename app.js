const fs = require('fs');
const express = require('express')
const hbs = require('hbs');
const port = 3000;

const app = express()

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
