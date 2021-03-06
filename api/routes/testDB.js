const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";


//mongoose stuff
// var Scheme = mongoose.Schema;

// var taskSchema = new Schema({
//     task: String
// });

// var Tasks = mongoose.model('Tasks', taskSchema);
//end

router.get("/", function(req, res, next) {
    res.send(databaseConnection);
});

// Connecting to MongoDB
mongoose.connect("mongodb://mongodb:27017/test");

// If there is a connection error send an error message
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = error;
});

// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});

module.exports = router;