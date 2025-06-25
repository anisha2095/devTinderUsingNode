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

//Get user by emailid
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId //get email id from browser/postman
    try{
        const users = await User.find({emailId: userEmail})
        if(users.length > 0){
            res.send(users)
        } else {
            res.status(404).send("User not found")
        }
    } catch(err){
        res.status(400).send("Something went wrong");
    }
})

//get all the users
app.get("/feed", async (req, res)=>{
    
    try{
        const users = await User.find({});
        res.send(users)
    } catch(err){
        res.status(400).send("Something went wrong");
    }
})

//delete the user

app.delete("/user", async (req, res) => {
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("user deleted successfully")
    } catch(err){
        res.status(400).send("Something went wrong");
    }
})

//update user data
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate({_id: userId}, data)
        res.send("user update successfully")
    } catch(err){
        res.status(400).send("Something went wrong");
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



