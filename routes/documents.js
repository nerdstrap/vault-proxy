
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const multer = require('multer');
const storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.get('/documents', function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/objects/documents";

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

router.post('/documents', upload.any(), function (req, res, next) {
    const API_URL = "https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1/objects/documents/";

    var fileToSend = req.files[0].buffer;

    var formData = {        
        file: {
            value: fileToSend,
            options: {
                filename: req.files[0].originalname,
                contentType: 'application/text'
            }
        }
    };
    Object.entries(req.body).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        //use key and value here
        formData[key] = value;
      });

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
        formData: formData,
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