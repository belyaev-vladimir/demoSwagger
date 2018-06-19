'use strict';
const dataProvider = require('../../data/user/createWithList.js');
/**
 * Operations on /user/createWithList
 */
module.exports = {
    /**
     * summary: Creates list of users with given input array
     * description: 
     * parameters: body
     * produces: application/xml, application/json
     * responses: default
     */
    post: function createUsersWithListInput(req, res, next) {
        /**
         * Get the data for response default
         * For response `default` status 200 is used.
         */
        let status = 200;
        let provider = dataProvider['post']['default'];
        provider(req, res,  (err, data) => {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
