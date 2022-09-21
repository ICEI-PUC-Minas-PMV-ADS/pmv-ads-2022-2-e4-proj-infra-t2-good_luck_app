const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./db");

var corsOptions = {
    origin: "http://localhost:8081"
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

app.get('/messages', function (req, res) {
    db.query('SELECT * FROM Messages ORDER BY id DESC', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});