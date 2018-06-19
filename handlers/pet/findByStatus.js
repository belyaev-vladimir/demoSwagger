'use strict';
const dataProvider = require('../../data/pet/findByStatus.js');
/**
 * Operations on /pet/findByStatus
 */
module.exports = {
    /**
     * summary: Finds Pets by status
     * description: Multiple status values can be provided with comma separated strings
     * parameters: status
     * produces: application/xml, application/json
     * responses: 200, 400
     */
    get: function findPetsByStatus(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        let status = 200;
        let provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
