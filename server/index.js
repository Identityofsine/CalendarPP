// server/index.js
require("dotenv").config();
const express = require("express");
const routes = require("./api/routes")


//define PORT, found in .env file...
const PORT = process.env.SERVERPORT;

const app = express(); // api backpoint

//load express, we can do this in another file -- which we probably do later.
/* EXPRESS BLOCK */
    app.disable("x-powered-by"); //idky you need this but you do
    //setup middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //load the routes js file ./routes/index.js
    app.use("/", routes);


/* END OF EXPRESS BLOCK */


//listener, on port whatever...
app.listen(PORT, () => {
    console.log(`CPP API listening on ${PORT}`)

})