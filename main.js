const express = require('express');
const app = express();
const port = 3000;

app.set('views', './content')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello', message: 'My name is Gabriel' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});