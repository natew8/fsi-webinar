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
  const ever_api = `https://api.webinarjam.com/everwebinar/webinar?api_key=${REACT_APP_WEBINAR_KEY}&webinar_id=57`;
  const fetch_response = await fetch(ever_api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await fetch_response.json();
  res.send(myJson);
});

//Register User to Webinar  DONT FORGET TO ADD ASYNC AND AWAIT//
app.post(
  "/api/webinar/register/:first_name/:last_name/:email/:phone/:webinar_id/:schedule/",
  async (req, res) => {
    const {
      first_name,
      last_name,
      email,
      phone,
      webinar_id,
      schedule,
    } = req.params;
    const api_url = `https://api.webinarjam.com/everwebinar/register?api_key=${REACT_APP_WEBINAR_KEY}&schedule=${schedule}&webinar_id=${webinar_id}&first_name=${first_name}&last_name=${last_name}&email=${email}&phone=${phone}`;
    const fetch_user = await fetch(api_url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const myJson = await fetch_user.json();
    res.send(myJson);
  }
);

app.listen(SESSION_PORT, () =>
  console.log(`Listening on port ${SESSION_PORT}`)
);
