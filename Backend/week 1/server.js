const app = require("./index");


app.listen(3000, () => {
    console.log("Express server live on port 3000");
    console.log("Swagger Docs at http://localhost:3000/api-docs");
});