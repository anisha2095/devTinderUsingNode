const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        min: 18
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    gender: {
        type: String,
        validate(value) {
            if(!["male", "female", "others"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        }
    },
    photoUrl: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    about: {
        type: String, 
        default: "This is default about of a user"
    },
    skills: {
        type: [String]
    }
},

{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;