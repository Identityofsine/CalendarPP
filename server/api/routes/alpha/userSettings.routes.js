const userSettings = require("../../controllers/usersettings");
var express = require("express");
var router = express.Router();

//get request
router.get("/profile", userSettings.profile)

//post request
//router.post("/profile", userSettings.profile)

//send back all routes
module.exports = router;