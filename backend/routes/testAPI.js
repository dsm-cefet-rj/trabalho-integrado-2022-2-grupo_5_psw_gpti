var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Tá rodando de boa');
});

module.exports = router;