
const express = require('express');
const router = express.Router();
const request = require('request-promise');

router.get('/', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/objects/documents/";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.body.sessionId,
            "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        resolveWithFullResponse: true
    };

    request(settings)
        .then(function (_response) {
            console.log(_response);
            res.send(_response.body);
        })
        .catch(function (_error) {
            console.log(_error);
            res.error(_error);
        });
});

module.exports = router;