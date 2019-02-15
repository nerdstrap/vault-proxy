
const express = require('express');
const router = express.Router();
const request = require('request-promise');

router.get('/objects/documents/types', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/metadata/objects/documents/types";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.query.sessionId,
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

router.get('/objects/documents/types/:type', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/metadata/objects/documents/types/" + req.params.type;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.query.sessionId,
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

router.get('/objects/documents/types/:type/subtypes/:subtype', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/metadata/objects/documents/types/" + req.params.type + "/subtypes/" + req.params.subtype;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.query.sessionId,
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

router.get('/objects/documents/types/:type/subtypes/:subtype/classifications/:classification', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/metadata/objects/documents/types/" + req.params.type + "/subtypes/" + req.params.subtype + "/classifications/" + req.params.classification;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.query.sessionId,
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

router.get('/vobjects/:objectName', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/vobjects/" + req.params.objectName;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "GET",
        "headers": {
            "authorization": req.query.sessionId,
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