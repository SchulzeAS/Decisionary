// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
var cors = require('cors');



/**
 * App Variables
 */

const app = express();
app.use(cors());
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//app.use(express.static(path.join(__dirname, "icons"))); funktioniert noch nicht
app.use(express.static(path.join(__dirname, "public")));


/**
 * Routes Definitions
 */

/*app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});*/
//router for saving poll objects

var corsOptions = {
  origin: 'localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

  app.get('/add/:poll',cors(corsOptions), savePoll);


app.get("/", (req, res) => {
  res.render("erstellen/index");
});

app.get("/teilnehmen", (req, res) => {
    res.render("teilnehmen/index");
});
app.get('/:uuid', (req, res) => {
//*  parsed = JSON.parse(obj);
  //*string = JSON.stringify(parsed);
    res.render("teilnehmen/index",{uuid: fs.readFileSync(req.params.uuid + '.json',
    (err, data) => {  if (err) throw err;  console.log(data)})
});
});





app.get("/auswertung", (req, res) => {
    res.render("auswerten/index");
});

app.get("/test", (req, res) => {
    res.render("dragdropPrototype");
});

/*app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "User1" } });
});

app.get("/logout", (req, res) => {
  res.render("logout", { title: "Profile", userProfile: { nickname: "Auth0" } });
}); */

/**
 * Server Activation
 */

 app.listen(port,'0.0.0.0', () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

/**
 * function for handling post requests.
 */
 function savePoll(req, res) {
   console.log("cake is a lie");
   //res.addHeader("Access-Control-Allow-Origin", "*"); obsolete due to CORS library usage
   poll = JSON.parse(req.params.poll);

   fs.writeFile(poll.id + '.json', JSON.stringify(poll), function (err) {
     if (err) throw err;
     console.log('Replaced!');
   });


}
