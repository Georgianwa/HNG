const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send({
        email: "georgia.u.nwa@gmail.com"
    });
});