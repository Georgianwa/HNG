# HNG Backend Stage 1 Task (Number Classification API)


## Project Description

This is a simple API, built with Node.js and deployed on Render, that classifies numbers into various categories, such as "even", "odd", "prime", and "Armstrong", and generates a fun fact about the number, gotten from [the numbers API](http://numbersapi.com). This API serves as a useful tool for learning about basic number classification in programming and serves as a template for more advanced classification logic.

## Features
Accepts a number as a query argument
Classifies the number by mathematical properties (even or odd, prime or not, Armstrong or perfect).
generates a random mathematical fact  about the number.
Handle invalid inputs with appropriate error messages.

## Setup Instructions 
1. git clone https://github.com/Georgianwa/HNG/tree/main/Backend/Stage%201.git cd backend-Stage1

2. Install dependencies: npm install

3. Run the application: npm start. The server will start at `http://localhost:3000/api/classify-number?number=${number}`.

## API documentation:
- **Endpoint:** `GET /`
- **URL:** `https://hng-stage1-wmcr.onrender.com/api/classify-number?number=371`
- **Response format:** 

``` json
-Required JSON Response Format (200 OK)
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11, //sum of its digits,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}

-Required JSON Response Format(400 Bad Request)
{
  "number": "alphabet",
  "error": true
}
```

## This project is built using the following technologies:

- Node.js: JavaScript runtime for building the server-side application.
- Express.js: Web framework for Node.js to handle routing.
- Render: Free deployment platform for small and hobby projects

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.
