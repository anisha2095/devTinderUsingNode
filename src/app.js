const express = require("express");

const app = express();

//Multiple Router handler

// 1st scenario
// app.get("/user", (req, res) => {
//     console.log("response1")
//     res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
// },
// (req,res) => {
//     console.log("response2")
//     res.send({firstName: "ankita"})
// }) 
//output - response1
//and in postman
//http://localhost:4000/user
// {
//     "firstName": "Anisha",
//     "lastName": "Kumari"
// }
//end

// 2nd scenario - to execute 2nd handler we will use next function
// app.get("/user", (req, res,  next) => {
//     console.log("response1")
//     // res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
//     next();
// },
// (req,res) => {
//     console.log("response2")
//     res.send({firstName: "ankita"})
// })
//output - response1  response2
//and in postman
//http://localhost:4000/user
// {
//     "firstName": "ankita",
// }
//end

// 3rd scenario - sending response from 1st scenario and also using next function
// app.get("/user", (req, res,  next) => {
//     console.log("response1")
//     res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
//     next();
// },
// (req,res) => {
//     console.log("response2")
//     res.send({firstName: "ankita"})
// })
//output - response1  response2  error
// "error" because user route we already sending a response. so, from the 2nd handler while we sending it gives and error becz we can send only one rsponse
//and in postman
//http://localhost:4000/user
// {
//         "firstName": "Anisha",
//         "lastName": "Kumari"
// }

//end

// 4th scenario - sending response from 1st scenario and also using next function
// app.get("/user", (req, res,  next) => {
//     console.log("response1")
//     // res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
//     next();
// },
// (req,res) => {
//     console.log("response2")
//     // res.send({firstName: "ankita"})
// })
//output - response1  response2
//and in postman
//http://localhost:4000/user
//no response, and continously loop shown
//end

// 5th scenario - both the router handler having only next function, no response
// app.get("/user", (req, res,  next) => {
//     console.log("response1")
//     // res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
//     next();
// },
// (req,res) => {
//     console.log("response2")
//     // res.send({firstName: "ankita"})
//     next();
// })
//output - response1  response2 error
// error because last handler having next function but we dont have next handler 
//and in postman
//http://localhost:4000/user
//error - 500 internal server, defined next function in last handler but there is no router handler exist.
//end


//Like this we can have multiple router handler, only one response we can send if already send the next handler have response then it will give an error 
//If we using next function means it runs the next router handler. if router handler not exist then it given an error in postman and terminal both
//use method applicable for all http methods - get,post,patch,delete
//or we can use methods seperatly get,post,patch,delete

app.listen(4000, () => {
    console.log("server is ready")
})

