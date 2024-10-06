const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
require('./app/models/inventory.model.js');
require('dotenv').config();

const mongoose = require('mongoose');   

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
.on('open', () => {
    console.log('Connected to MongoDB');
})
.on('error', (err) => {
    console.log('Connection error: ', err.message);
});

require('./app/routes/inventory.router.js')(app);

const server = app.listen(8080, function () {
    const port = server.address().port;
    const host = server.address().address;
    console.log('Server is running at http://%s:%s',host,port);
})