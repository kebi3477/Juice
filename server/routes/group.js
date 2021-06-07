const express = require('express');
const db = require('../config/database.js');
const conn = db.init();
const router = express.Router();

router.post('/setGroup', function(req, res) {
    const status = {};
    const group = req.body;
    if(!group.name || !group.type || !group.comment) {
        status.result = 'null';
        res.json(status);
    } else {
        const sql = `INSERT INTO groups VALUES('','','${group.name}',${group.comment},now(),'${req.session.id}',${group.type})`;
        conn.query(sql, function(err) {
            if(err) {
                status.result = 'fail';
            } else {
                status.result = 'success';
            }
            res.json(status);
        })
    }
})

router.get('/getGroupByType', function(req, res) {
    const status = {};
    const group = req.body;
    if(!group.type) {
        status.result = 'null';
        res.json(status);
    } else {
        const sql = `
            SELECT * FROM groups g 
            JOIN type t ON t.type_id=g.type_id AND g.type_id=${group.type}`;
        conn.query(sql, function(err, rows) {
            if(err || !rows.length) {
                status.result = 'fail';
            } else {
                status.result = 'success';
                status.groups = rows;
            }
            res.json(status);
        })
    }
})

module.exports = router;