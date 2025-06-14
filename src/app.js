const express = require("express");

const app = express();

//Middleware

// 1st scenario
// app.use("/", (req,res) => {
//     console.log("first / router")
// })
// app.get("/user", (req, res) => {
//     console.log("response1")
//     res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
// },
// (req,res) => {
//     console.log("response2")
// }) 
//output - first / router
//and in postman
//http://localhost:4000/user
//loop keep going because all the time "/"" router executes and dont have response, user router did not execute because "/"" it is placed above user router and it is always applicable for all routes so we have to make sure about sequence
//end

// 2nd scenario
// app.use("/", (req,res, next) => {
//     console.log("first / router")
//     next();
// })
// app.get("/user", (req, res, next) => {
//     console.log("response1")
//     next();
// },
// (req,res, next) => {
//     console.log("response2")
//     next();
// },
// (req,res) => {
//     console.log("response3")
//     res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
// }) 
//output - first / router response1 response2 response3
//and in postman
//http://localhost:4000/user
// {
//     "firstName": "Anisha",
//     "lastName": "Kumari"
// }
//end

// 3rd scenario
// app.use("/", (req,res, next) => {
//     console.log("first / router")
//     res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
//     next();
// })
// app.get("/user", (req, res, next) => {
//     console.log("response1")
//     next();
// },
// (req,res, next) => {
//     console.log("response2")
//     next();
// },
// (req,res) => {
//     console.log("response3")
// }) 
//output - first / router response1 response2 response3
//and in postman
//http://localhost:4000/user
// {
//     "firstName": "Anisha",
//     "lastName": "Kumari"
// }
//end

// 4th scenario
app.use("/", (req,res, next) => {
    console.log("first / router")
    next();
    res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
})
app.get("/user", (req, res, next) => {
    console.log("response1")
    next();
},
(req,res, next) => {
    console.log("response2")
},
(req,res) => {
    console.log("response3")
}) 
//output - first / router response1 response2 
//and in postman
//http://localhost:4000/user
// {
//     "firstName": "Anisha",
//     "lastName": "Kumari"
// }
//end

app.listen(4000, () => {
    console.log("server is ready")
})

