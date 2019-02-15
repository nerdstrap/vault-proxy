
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const multer = require('multer');
const storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post('/', upload.any(), function (req, res, next) {
    var fileToSend = req.files[0].buffer;
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/objects/documents/";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": API_URL,
        "method": "POST",
        "headers": {
            "authorization": req.body.sessionId,
            "cache-control": "no-cache"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        formData: {
            
            lifecycle__v: 'Unclassified',
            name__v: 'document.txt',
            type__v: 'Undefined',
            
            file: {
                value: fileToSend,
                options: {
                    filename: 'document.txt',
                    contentType: 'application/text'
                }
            }
        },
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