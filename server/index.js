require("dotenv").config();
const request = require("request");
const express = require("express");
const fetch = require("node-fetch");
const session = require("express-session");
const { SESSION_SECRET, REACT_APP_WEBINAR_KEY, SESSION_PORT } = process.env;

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

//Get Webinar Data//
app.post("/api/webinar", async (req, res) => {
  const api_url = `https://api.webinarjam.com/webinarjam/webinar?api_key=${REACT_APP_WEBINAR_KEY}&webinar_id=51`;
  const fetch_response = await fetch(api_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await fetch_response.json();
  res.send(myJson);
});

//Register User to Webinar//
app.post(
  "/api/webinar/register/:first_name/:last_name/:email/:phone",
  async (req, res) => {
    console.log(req);
    const api_url = `https://api.webinarjam.com/webinarjam/register?api_key=${REACT_APP_WEBINAR_KEY}schedule=78&webinar_id=45&first_name=Nate(test)&last_name=Waite(test)&email=n8w8dev@gmail.com&phone`;
    const fetch_user = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(fetch_user);
  }
);

app.listen(SESSION_PORT, () =>
  console.log(`Listening on port ${SESSION_PORT}`)
);
