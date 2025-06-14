const express = require("express");
const connectedDB = require("./config/database");
const app = express();
const User = require("./models/user")

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Ankita",
        lastName: "Kumari",
        emailId: "ankita@gmail.com",
        password: "ankita333"
    })

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



