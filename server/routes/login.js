const express = require('express');
const db = require('../config/database.js');
const conn = db.init();
const router = express.Router();
const status = {};

db.connect(conn);

router.post('/login', function(req, res) {
    const user = req.body;
    if(!user.id || !user.pw) {
        status.result = 'null';
        res.json(status);
    } else {
        const sql = `SELECT * FROM user WHERE user_id = '${user.id}' and user_password = '${user.pw}'`;
        conn.query(sql, function(err, rows) {
            if(err || !rows.length) {
                status.result = 'fail';
            } else {
                status.result = 'success';
            }
            res.json(status);
        })
    }
})

router.post('/signUp', function(req, res) {
    const user = req.body;
    if(!user.id || !user.pw || !user.email || !user.name ) {
        status.result = 'null';
    } else if(!/^[A-Za-z0-9]{6,12}$/.test(user.id)) {
        status.result = 'fail';
    } else if(!/^[A-Za-z0-9]{8,16}$/.test(user.password)) {
        status.result = 'fail';
    } else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(user.email)) {
        status.result = 'fail';
    } else {
        const sql = `INSERT INTO user VALUES('${user.id}', '${user.password}', '${user.email}', '${user.name}', '${user.pic}')`;
        conn.query(sql, function(err, rows) {
            if(err) {
                status.result = 'fail';
            } else {
                status.result = 'success';
            }
        })
    }
    res.json(status);
})

module.exports = router;