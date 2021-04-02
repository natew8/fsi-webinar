require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const survey = require("./controllers/survey");
const webinar = require("./controllers/webinar");
const { SESSION_SECRET, SESSION_PORT, CONNECTION_STRING } = process.env;

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

app.use(express.static(`${__dirname}/../build`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//Get EverWebinar Data//
app.post("/api/everWebinars", webinar.getAllWebinars);
app.post("/api/webinar", webinar.getWebinarInfo);
//Register User to Webinar//
app.post("/api/webinar/register", webinar.registerUser);

//Database End Points//
app.post("/api/survey", survey.surveyData);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((dbInstance) => {
  console.log("DB READY");
  app.set("db", dbInstance);
  app.listen(SESSION_PORT, () =>
    console.log(`Listening on port ${SESSION_PORT}`)
  );
});
