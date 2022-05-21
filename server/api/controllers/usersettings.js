//all REQUESTS involving user information, their reminders, their calender, and their settings.
const log = require("npmlog");
const { json } = require("express/lib/response");

//where all the usersettings functions will go, all post and get requests, this is known as a 
//controller
class UserSettings{
    static async isValidHeader(req, res) {
        if(!req.headers || req.headers["api_key"] !== process.env.api_key )
        {
            console.log(`${req.ip} tried to authenticate but sent ${req.headers["api_key"]}`)
            //how to return a message/anything really
            res.json({message:"get lost"});
            res.status(401);
            //status, 401 means unauthorized, 500 means internal error, 200 means OK, etc
            res.send(); //send, simple take notes...
            return false;
        }
        return true;
    }

    //responsible for /alpha/profile
    async profile(req, res){
        log.warn("/profile GET Request");
        //how to use isValidHeader
        let x = await UserSettings.isValidHeader(req, res); //remember to use await when it comes to async functions!!!
        if(!x){ // if this isnt a validheader return.
            return;
        }
        res.json({
            userName:"MarquessPusey69420",
            events:25,
            reminders:["reminderObject1", "reminderObject2", "reminderObject3"],
            lastactive:parseInt((new Date).getTime()),
            someBullShit:"we need to discuss what this is"
        })
        res.status(201);
        res.send();
        return;
    }
}

//make the export a new instance of UserSettings()
module.exports = new UserSettings();