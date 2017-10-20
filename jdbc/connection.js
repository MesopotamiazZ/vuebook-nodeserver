var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Tigris',
  database : 'keepaccounts',
});
module.exports = connection