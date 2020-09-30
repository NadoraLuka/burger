require('dotenv').config();
// Set up MySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  // connect to JawsDB (heroku)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // else connect to local database
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"",
    database: "burgers_db"
  });
}

// Make connection
connection.connect(function (err) {
  if (err) {
    console.error("\nError connecting: " + err.stack + "\n");
    return;
  }
  console.log("\nConnected as id " + connection.threadId + "\n");
});

// Export connection for our ORM to use.
module.exports = connection;