const app = require("./index");


app.listen(3000, () => {
    console.log("Express server live on port 3000");
});

const fetch = require("node-fetch");

fetch("https://hng-bel9.onrender.com/")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));