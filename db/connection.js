const mysql = require('mysql2')
require('dotenv').config()
const host = "sql12.freesqldatabase.com"
const user = "sql12618711"
const password = "XPM6xMnn6v"
const database = "sql12618711"
const port = "3306"
// Host: sql12.freesqldatabase.com
// Database name: sql12618711
// Database user: sql12618711
// Database password: XPM6xMnn6v
// Port number: 3306

const connect_mysql = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
//     port: port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise()


module.exports = connect_mysql
