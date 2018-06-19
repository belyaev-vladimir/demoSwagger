'use strict';
const dataProvider = require('../../data/user/createWithArray.js');
/**
 * Operations on /user/createWithArray
 */
module.exports = {
    /**
     * summary: Creates list of users with given input array
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     */
    post: function createUsersWithArrayInput(req, res, next) {
        /**
         * Get the data for response default
         * For response `default` status 200 is used.
         */
        let status = 200;
        let provider = dataProvider['post']['default'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
