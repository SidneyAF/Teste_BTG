const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('../routes');

module.exports = () =>{
    
    app.set('port', 8080);

    app.use(bodyParser.json());

    app.use('/api/', routes);

    return app;
}