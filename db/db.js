const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'belajar'
});

connection.connect(error => {
    if(error){
    console.log(error)
    };
    console.log("Successfully connected to the database.");
});
module.exports = connection;