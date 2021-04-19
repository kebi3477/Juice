const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send({gretting: 'sadasdasd'});
})

module.exports = router;