const express = require("express");
const app = express();

app.use(express.json());

const isoTimestamp = new Date().toISOString();
console.log(isoTimestamp);

app.get("/", (req, res) => {
    res.send({
        email: "georgia.u.nwa@gmail.com",
        currentTime: new Date().toISOString(),
        GithubURL: "https://github.com/Georgianwa/HNG"
    });
});

module.exports = app;