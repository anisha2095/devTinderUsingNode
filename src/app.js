const express = require("express");

const app = express();
const {adminAuth} = require("./middleware/Auth")
const connectedDB = require("./config/database");

connectedDB().then(() => {
    console.log("Database successfully connected"); //first estiblished the database then start the server
    app.listen(4000, () => {
    console.log("server is ready")
})
}).catch((error) => {
    console.log("Database is not connected")
})

app.use("/", (req, res, next )=> {
    console.log("/ router")
    next()
})
app.use("/user", (req, res )=> {
    console.log("user router")
    res.send("user router")
})
app.use("/admin", adminAuth) //admin router applicable for all admjin get and admin delete post patch
app.get("/admin/getAllAdmin", (req, res )=> {
    console.log("admin added successfully")
    res.send("admin added successfully")
})
app.delete("/admin/deleteAdmin", (req, res )=> {
    console.log("Deleted admin successfully")
    res.send("Deleted admin successfully")
})


