const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD
});
console.log("created connection");

module.exports = pool.promise();