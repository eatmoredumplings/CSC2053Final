const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port:'3306',
  password: process.env.DB_PASSWORD,
  database: process.env.SCHEMA,
})

module.exports = db