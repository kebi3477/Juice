const express = require('express');
const app = express();
const db = require('../config/database.js');
const conn = db.init();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

db.connect(conn);

router.get('/', function(req, res) {
    const sql = `SELECT * FROM USER`;   
    // const sql = `INSERT INTO user VALUES('kebi3477', 'wnddkd1204', 'kebi3477@naver.com', '고동민', '')`;
    conn.query(sql, function(err, rows, fields) {
        if(err) console.log(rows);
        else res.send(rows);
    })
})


module.exports = router;