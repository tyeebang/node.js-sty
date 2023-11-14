const express = require('express');
const app = express();
app.get('/abc', (req, res) => {
    res.send('hello express');
});

app.listen(8080, () => {
    console.log('8080 express server');
});