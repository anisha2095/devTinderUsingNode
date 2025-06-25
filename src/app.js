const express = require("express");
const connectedDB = require("./config/database");
const app = express();
const User = require("./models/user")

app.use(express.json());
app.post("/signup", async (req, res) => {
    //creating a new instance of user model
    const user = new User(req.body)  //signup API dynamic to receive data from end user(browser/postman hitting the api)
    console.log(req.body)   //output undefined, add express.json method

    try {
        await user.save();
        res.send("user successfully saved");
    } catch(err){
        res.status(400).send(err.message)
    }
})

//DB Connection
connectedDB().then(() => {
    console.log("Database successfully connected"); //first estiblished the database then start the server
    app.listen(4000, () => {
    console.log("server is ready")
})
}).catch((error) => {
    console.log("Database is not connected")
})



