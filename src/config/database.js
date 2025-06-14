const mongoose = require("mongoose");

const connectedDB = async () => {
    await mongoose.connect("mongodb+srv://NodeProject:NodeProject@cluster0.fyid1vv.mongodb.net/devTinder", {
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
    })
}

module.exports = connectedDB;




