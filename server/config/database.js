const mysql = require('mysql');
const dbInfo = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'juice'
}

module.exports = {
    init: function() {
        return mysql.createConnection(dbInfo);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error(`mysql connect error : ${err}`);
            else console.log(`mysql is connected succesfully`);
        });
    }
}