const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

function is_prime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
        
    for (let i = 5; i <= Math.sqrt(num); i ++) {
        if (num % i === 0) return false;

    }
    return true;
}
function is_armstrong(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

function is_perfect(num) {
    if (num <= 3 || is_prime(num)) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num) sum += num / i;
        }
    }
    return num > 1 && sum === num;
}


function digit_sum(num) {
    let sum = 0;
    let num_string = Math.abs(num).toString(); // Convert absolute value to string

    for (let i = 0; i < num_string.length; i++) {
        sum += parseInt(num_string[i]);
    }
    
    return sum;
}


// function getDigitSum(num) {
//     return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
// }

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number) || !Number.isInteger(parseFloat(number))) {
        return res.status(400).json({ 
            number: number, 
            error: true
         });
    }
    const num = parseInt(number);
    const is_armstrong_num = is_armstrong(num);
    const properties = is_armstrong_num ? ["armstrong"] : [];
    properties.push(num % 2 === 0 ? "even" : "odd");

    try{
        const fetch = (await import("node-fetch")).default; // Use dynamic import
        const response = await fetch(`http://numbersapi.com/${num}/math`);
        const funFact = await response.text();
        res.json({
            number: num,
            is_prime: is_prime(num),
            is_perfect: is_perfect(num),
            properties,
            digit_sum: digit_sum(num),
            fun_fact: funFact
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch fun fact",
            details: err.message
        });
    }
});

module.exports = app;