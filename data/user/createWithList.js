'use strict';
const Mockgen = require('../mockgen.js');
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
     * operationId: createUsersWithListInput
     */
    post: {
        default:  (req, res, callback) => {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/user/createWithList',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
