# HNG Backend Week 1 API

## A clear description of the project.
This is a public API that returns basic information in JSON format using a `GET` request. The information retrieved is an email address, the current time in ISO 8601 format and the URL for the git repo that contains the code. It is written in Node.js and deployed using Render.

## Setup Instructions 
1. Clone the repository: git https://github.com/Georgianwa/HNG/tree/main/Backend/week%201 cd backend-week1

2. Install dependencies: npm install

3. Run the application: npm start

## API documentation:
- **Endpoint:** `GET /`
- **URL:** `https://hng-bel9.onrender.com/`
- **Response format:** 
``` json
{
    email: "georgia.u.nwa@gmail.com",
    currentDateTime: new Date().toISOString(),
    GithubURL: "https://github.com/Georgianwa/HNG/tree/main/Backend/week%201"
}
```
## Example usage
``` 
 const fetch = require("node-fetch");

 fetch("https://hng-bel9.onrender.com/")

 .then(response => response.json())

 .then(data => console.log(data))

 .catch(error => console.log(error));
 ```


## One backlink related to your chosen programming language/stack:
https://hng.tech/hire/nodejs-developers