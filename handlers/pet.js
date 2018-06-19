'use strict';
const dataProvider = require('../data/pet.js');
/**
 * Operations on /pet
 */
module.exports = {
    /**
     * summary: Add a new pet to the store
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 405
     */
    post: function addPet(req, res, next) {
        /**
         * Get the data for response 405
         * For response `default` status 200 is used.
         */
        let status = 405;
        let provider = dataProvider['post']['405'];
        provider(req, res,  (err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Update an existing pet
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: 400, 404, 405
     */
    put: function updatePet(req, res, next) {
        /**
         * Get the data for response 400
         * For response `default` status 200 is used.
         */
        let status = 400;
        let provider = dataProvider['put']['400'];
        provider(req, res,  (err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
