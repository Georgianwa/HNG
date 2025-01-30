const express = require("express");
const app = express();

app.arguments(express.json());
app.get("/", (req, res) => {
    res.send({
        email: "georgia.u.nwa@gmail.com"

    });
});