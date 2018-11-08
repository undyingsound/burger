let mysql = require('mysql');


let connection = mysql.createConnection({
    host: "Localhost",
    port:8080,
    user: 'root',
    password: 'Berkowitz5!',
    database: 'burgers_db'

})

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;