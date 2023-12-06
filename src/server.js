const path = require('path');
const express = require('express');
const petRoutes = require('./routes');
const logRoutes = require('./middleware/log-routes');

const app = express();

const publicDir = path.join(__dirname, '..', 'public');
const staticAssets = express.static(publicDir);
app.use(staticAssets);


app.use(express.json());
app.use(logRoutes);
app.use(petRoutes);

app.get('/hi', (req, res) => {
    res.send("hi")
})


module.exports = app;