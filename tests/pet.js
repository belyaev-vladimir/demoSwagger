'use strict';
const Test = require('tape');
const Express = require('express');
const BodyParser = require('body-parser');
const Swaggerize = require('swaggerize-express');
const Path = require('path');
const Request = require('supertest');
const Mockgen = require('../data/mockgen.js');
const Parser = require('swagger-parser');
/**
 * Test for /pet
 */
Test('/pet', function (t) {
    let apiPath = Path.resolve(__dirname, '../config/swagger.json');
    let App = Express();
    App.use(BodyParser.json());
    App.use(BodyParser.urlencoded({
        extended: true
    }));
    App.use(Swaggerize({
        api: apiPath,
        handlers: Path.resolve(__dirname, '../handlers'),
        security: Path.resolve(__dirname, '../security')
    }));
    Parser.validate(apiPath, function (err, api) {
        t.error(err, 'No parse error');
        t.ok(api, 'Valid swagger api');
        /**
         * summary: Add a new pet to the store
         * description: 
         * parameters: body
         * produces: application/xml, application/json
         * responses: 405
         */
        t.test('test addPet post operation', function (t) {
            Mockgen().requests({
                path: '/pet',
                operation: 'post'
            }, function (err, mock) {
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
                    t.ok(res.statusCode === 405, 'Ok response status');
                    t.end();
                });
            });
        });/**
         * summary: Update an existing pet
         * description: 
         * parameters: body
         * produces: application/xml, application/json
         * responses: 400, 404, 405
         */
        t.test('test updatePet put operation', function (t) {
            Mockgen().requests({
                path: '/pet',
                operation: 'put'
            }, function (err, mock) {
                let request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(App)
                    .put('/v2' + mock.request.path);
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
                    t.ok(res.statusCode === 400, 'Ok response status');
                    t.end();
                });
            });
        });
    });
});
