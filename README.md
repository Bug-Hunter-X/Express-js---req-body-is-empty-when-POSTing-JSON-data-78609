# Express.js - Empty req.body on JSON POST

This repository demonstrates a common issue in Express.js applications where `req.body` remains empty despite receiving a JSON POST request.  The problem arises from a missing or incorrectly configured middleware.

## The Bug

The `bug.js` file shows an Express.js server that attempts to handle JSON POST requests to the `/data` route.  However, because the `express.json()` middleware is incorrectly implemented (or missing),  `req.body` will always be empty.

## The Solution

The `bugSolution.js` file provides a corrected version.  The `express.json()` middleware is correctly included, allowing the server to parse the JSON request body and populate `req.body`.

## How to reproduce:
1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js` then send a POST request to `http://localhost:3000/data` with a JSON payload using a tool like Postman or curl. Observe that the console logs an empty object. 
4. Run `node bugSolution.js` and repeat step 3. This time, the console will correctly log the JSON data.