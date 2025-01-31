const express = require("express");
const app = express();
const cors = require("cors");


const isoTimestamp = new Date().toISOString();
console.log(isoTimestamp);

app.use(cors());

app.get("/", (req, res) => {
    const response = {
        email: "georgia.u.nwa@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Georgianwa/HNG/tree/main/Backend/week%201"
    };

    res.status(200).json(response);
});

module.exports = app;