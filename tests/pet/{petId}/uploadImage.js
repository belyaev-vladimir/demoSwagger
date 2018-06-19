'use strict';
const Test = require('tape');
const Express = require('express');
const BodyParser = require('body-parser');
const Swaggerize = require('swaggerize-express');
const Path = require('path');
const Request = require('supertest');
const Mockgen = require('../../../data/mockgen.js');
const Parser = require('swagger-parser');
/**
 * Test for /pet/{petId}/uploadImage
 */
Test('/pet/{petId}/uploadImage', function (t) {
    let apiPath = Path.resolve(__dirname, '../../../config/swagger.json');
    let App = Express();
    App.use(BodyParser.json());
    App.use(BodyParser.urlencoded({
        extended: true
    }));
    App.use(Swaggerize({
        api: apiPath,
        handlers: Path.resolve(__dirname, '../../../handlers'),
        security: Path.resolve(__dirname, '../../../security')
    }));
    Parser.validate(apiPath,  (err, api)=> {
        t.error(err, 'No parse error');
        t.ok(api, 'Valid swagger api');
        /**
         * summary: uploads an image
         * description: 
         * parameters: petId, additionalMetadata, file
         * produces: application/json
         * responses: 200
         */
        t.test('test uploadFile post operation', function (t) {
            Mockgen().requests({
                path: '/pet/{petId}/uploadImage',
                operation: 'post'
            },  (err, mock) => {
                let request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(App)
                    .post('/v2' + mock.request.path);
                if (mock.request.body) {
                    //Send the request body
                    request = request.send(mock.request.body);
                } else if (mock.request.formData){
                    //Send the request form data
                    request = request.send(mock.request.formData);
                    //Set the Content-Type as application/x-www-form-urlencoded
                    request = request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    Object.keys(mock.request.headers).forEach(function (headerName) {
                        request = request.set(headerName, mock.request.headers[headerName]);
                    });
                }
                request.end(function (err, res) {
                    t.error(err, 'No error');
                    t.ok(res.statusCode === 200, 'Ok response status');
                    let Validator = require('is-my-json-valid');
                    let validate = Validator(api.paths['/pet/{petId}/uploadImage']['post']['responses']['200']['schema']);
                    let response = res.body;
                    if (Object.keys(response).length <= 0) {
                        response = res.text;
                    }
                    t.ok(validate(response), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });
    });
});
