// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");



/**
 * App Variables
 */

const app = express();
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
app.get("/", (req, res) => {
  res.render("erstellen/index");
});

// A route for adding a new word with a score
app.get('/add/:poll', savePoll);

app.get("/teilnehmen", (req, res) => {
    res.render("teilnehmen/index");
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
   console.log(req);

}
