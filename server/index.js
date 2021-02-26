require("dotenv").config();
const request = require("request");
const express = require("express");
const fetch = require("node-fetch");
const session = require("express-session");
const webinar = require("./controllers/webinar");
const { SESSION_SECRET, SESSION_PORT } = process.env;

const app = express();
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Get EverWebinar Data//
app.post("/api/webinar", webinar.getWebinarInfo);

//Register User to Webinar//
app.post(
  "/api/webinar/register/:first_name/:last_name/:email/:phone/:webinar_id/:schedule/",
  webinar.registerUser
);

app.listen(SESSION_PORT, () =>
  console.log(`Listening on port ${SESSION_PORT}`)
);
