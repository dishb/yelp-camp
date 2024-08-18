const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('App is running.');
    console.log('Server is listening on port 3000.');
})

app.getMaxListeners('/', (req, res) => {
    res.send('Hello, World!');
})
