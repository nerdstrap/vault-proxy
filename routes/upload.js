
const express = require('express');
const router = express.Router();
const request = require('request-promise');
const multer = require('multer');
const storage = multer.memoryStorage();
var upload = multer({ storage: storage });
// var upload = multer({ dest: 'uploads/' });
const fs = require('fs');

router.post('/', upload.any(), function (req, res, next) {
    var fileToSend = req.files[0].buffer;
    // var fileToSend = fs.createReadStream(req.files[0].path);
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

    // var r = request(settings, function (err, res, response) {
    //     // For some reason 'response' is a string, convert it to JSON.
    //     data = JSON.parse(response);
    // });

    // var form = r.form();
    // form.append("lifecycle__v", "Unclassified");
    // form.append("name__v", req.files[0].originalname);
    // form.append("type__v", "Undefined");
    // form.append("file", fileToSend);

    request(settings)
        .then(function (_response) {
            console.log(_response);
            res.send(_response.body);
        })
        .catch(function (_error) {
            console.log(_error);
            res.error(_error);
        });

    // // const requestBody = {
    // //     'file': req.files[0].buffer,
    // //     'name__v': req.files[0].originalname,
    // //     'type__v': 'Undefined',
    // //     'lifecycle__v': 'Unclassified'
    // // };
    // // var CRLF = '\r\n';
    // let requestBody = new FormData();
    // // const opts = {
    // //     header: `${CRLF} + '--' + ${requestBody.getBoundary()} + ${CRLF} + 'X-Custom-Header: 123' + ${CRLF} + ${CRLF}`,
    // //     knownLength: 1
    // // };
    // requestBody.append("lifecycle__v", "Unclassified");
    // requestBody.append("name__v", req.files[0].originalname);
    // requestBody.append("type__v", "Undefined");
    // requestBody.append("file", fileToSend);

    // const config = {
    //     headers: {
    //         'Authorization': req.body.sessionId,
    //         'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    //     }
    // };
    // delete axios.defaults.headers.common['Accept'];
    // axios.post(
    //     `${API_URL}/objects/documents`,
    //     qs.stringify(requestBody),
    //     config
    // )
    //     .then((_response) => {
    //         console.log(`statusCode: ${_response.statusCode}`);
    //         console.log(_response);
    //         res.send(_response.data);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         res.error(error);
    //     });
});

module.exports = router;