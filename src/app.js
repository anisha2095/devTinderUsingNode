const express = require("express");

const app = express();
app.use("/hello", (req, res) => {
    res.send("Hello from the server");
})
//using use method any of the http method we can use get,post, patch,delete
app.use("/test", (req, res) => {
    res.send("Testing server");
})
//specific method
app.get("/user", (req, res) => {
    res.send({firstName: "Anisha", lastName: "Kumari"})
})
app.post("/user", (req, res) => {
    res.send("Data successfully added")
})
app.put("/user", (req, res) => {
    res.send({firstName: "Ankita", lastName: "kumari"})
})
app.patch("/user", (req, res) => {
    res.send({firstName: "Ankita", lastName: "Anand"})
})
app.delete("/user", (req, res) => {
    res.send("Data successfully deleted")
})
//end
app.use("/", (req, res) => {
    res.send("Home page");
})                                              //always keep routing on sequence or order, if / would be avobe to hello and test route all the time routing redirect to / routing
app.listen(4000, () => {
    console.log("server is ready")
})

