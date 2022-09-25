const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'goodluck',
    multipleStatements: true
});

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to goodluck application." });
});

app.get('/users', function (req, res) {
    db.query('SELECT * FROM user ORDER BY idUser DESC', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM user WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				// request.session.loggedin = true;
				// request.session.username = username;
				// Redirect to home page
				response.redirect("/users");
			} else {
				response.send({message:'Incorrect Username and/or Password!'});
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});