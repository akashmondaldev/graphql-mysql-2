const mysql = require('mysql2')
require('dotenv').config()
const host = "containers-us-west-113.railway.app"
const user = "root"
const password = "95z2JFyUBHaBrA3EkHjX"
const database = "railway"
const port = "7717"

const connect_mysql = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise()


module.exports = connect_mysql
