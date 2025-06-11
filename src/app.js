const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    console.log(req.query)
    res.send({firstName: "Anisha", lastName: "Kumari", usercity: req.query.usercity})
})

app.listen(4000, () => {
    console.log("server is ready")
})

