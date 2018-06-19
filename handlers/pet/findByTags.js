'use strict';
const dataProvider = require('../../data/pet/findByTags.js');
/**
 * Operations on /pet/findByTags
 */
module.exports = {
    /**
     * summary: Finds Pets by tags
     * description: Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * parameters: tags
     * produces: application/xml, application/json
     * responses: 200, 400
     */
    get: function findPetsByTags(req, res, next) {
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
