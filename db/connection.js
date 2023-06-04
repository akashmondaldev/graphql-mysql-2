const mysql = require('mysql2')
require('dotenv').config()
const host = "skyinc.mysql.database.azure.com"
const user = "akash"
const password = "olivia@2003"
const database = "msdb"
// const port = "7717"

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
