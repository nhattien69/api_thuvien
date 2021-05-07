'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/eventRoutes');
const http = require('http');


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', eventRoutes.routes);

app.listen(config.port, () => console.log('is on http://localhost:' + config.port));