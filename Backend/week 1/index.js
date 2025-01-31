const express = require("express");
const app = express();
const cors = require("cors");


const isoTimestamp = new Date().toISOString();
console.log(isoTimestamp);

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "georgia.u.nwa@gmail.com",
        current_datetime: new Date().toISOString().split(".")[0] + "Z",
        github_url: "https://github.com/Georgianwa/HNG"
    });

    res.status(200);
});

module.exports = app;