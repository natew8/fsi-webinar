require("dotenv").config();
const { request } = require("express");
const express = require("express");
const session = require("express-session");
const { SESSION_SECRET, WEBINAR_KEY, SESSION_PORT } = process.env;

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

app.post("/api/webinar", (req, res) => {
  console.log(res);
});

app.listen(SESSION_PORT, () =>
  console.log(`Listening on port ${SESSION_PORT}`)
);
