// this is where the server index.js file retrives all our GET and POST requests, this is the heart of it
const express = require("express");

//the userSettings.routes include; makes things more organizied.
const userRouter = require("./alpha/userSettings.routes");

const router = express.Router();

//tell router to use the js require(which is a router object) as endpoints
//route for user stuff
router.use("/alpha/users", userRouter);


//module.exports = what is returned when this file is included/required
module.exports = router;