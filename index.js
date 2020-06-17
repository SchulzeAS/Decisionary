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

app.get("/teilnehmen", (req, res) => {
    res.render("teilnehmen/index");
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
