const express = require("express");
const app = express();

app.use(express.json());

const isoTimestamp = new Date().toISOString();
console.log(isoTimestamp);

app.get("/", (req, res) => {
    res.send({
        email: "georgia.u.nwa@gmail.com",
        currentDateTime: new Date().toISOString(),
        GithubURL: "https://github.com/Georgianwa/HNG/tree/main/Backend/week%201"
    });
});

module.exports = app;