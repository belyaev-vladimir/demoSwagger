'use strict';
let Mockgen = require('../mockgen.js');
/**
 * Operations on /pet/{petId}
 */
module.exports = {
    /**
     * summary: Find pet by ID
     * description: Returns a single pet
     * parameters: petId
     * produces: application/xml, application/json
     * responses: 200, 400, 404
     * operationId: getPetById
     */
    get: {
        200:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'get',
                response: '400'
            }, callback);
        },
        404:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Updates a pet in the store with form data
     * description: 
     * parameters: petId, name, status
     * produces: application/xml, application/json
     * responses: 405
     * operationId: updatePetWithForm
     */
    post: {
        405:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'post',
                response: '405'
            }, callback);
        }
    },
    /**
     * summary: Deletes a pet
     * description: 
     * parameters: api_key, petId
     * produces: application/xml, application/json
     * responses: 400, 404
     * operationId: deletePet
     */
    delete: {
        400:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'delete',
                response: '400'
            }, callback);
        },
        404:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/pet/{petId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
