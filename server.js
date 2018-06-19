'use strict';

const Http = require('http');
const Express = require('express');
const BodyParser = require('body-parser');
const Swaggerize = require('swaggerize-express');
const swaggerUi = require('swagger-ui-express');
const Path = require('path');
const log = require('./log')(module);
const App = Express();

const Server = Http.createServer(App);

App.use(BodyParser.json());

App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./config/swagger.json'),
    handlers: Path.resolve('./handlers')
}));


const swaggerDocument = require('./config/swagger.json');
App.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

log.info('Start server listen');

Server.listen(8000, function ()  {
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    log.info('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
