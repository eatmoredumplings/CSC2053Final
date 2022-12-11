const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.DB_PASSWORD,
  port    :'3306',
  database: "puzzoh_database",
})
console.log(process.env.DB_PASSWORD);

module.exports = db
