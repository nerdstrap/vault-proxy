const express = require('express');
const router = express.Router();
const axios = require('axios');
const qs = require('querystring');

// handle incoming request to /users
router.post('/', (req, res, next) => {
    const API_URL = 'https://vv-consulting-candidate-rd-exercise22.veevavault.com/api/v19.1';
    const requestBody = {
        'username': req.body.username,
        'password': req.body.password
    };
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    axios.post(
        `${API_URL}/auth`,
        qs.stringify(requestBody),
        config
        )
        .then((_response) => {
            console.log(`statusCode: ${_response.statusCode}`);
            console.log(_response);
            res.send(_response.data);
        })
        .catch((error) => {
            console.error(error);
            res.error(error);
        });
});

module.exports = router;