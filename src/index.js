// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 3000
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json())
// your code goes here


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;

require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
res.send("Hello World!");
});
app.post("/add", (req, res) => {
const num1 = req.body.num1;
const num2 = req.body.num2;
if (typeof num1 == "string" || typeof num2 === "string") {
//return an an eror here
res.json({
status: "error",
message: "Invalid data types",
});
} else {
const result = num1 + num2;
if (result > 1000000) {
// return an error here
res.json({
status: "error",
message: "Overflow",
});
} else {
res.json({
status: "success",
message: "the sum of given two numbers",
sum: result,
});
}
}
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;