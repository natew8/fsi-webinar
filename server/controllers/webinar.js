const { REACT_APP_WEBINAR_KEY } = process.env;
const fetch = require("node-fetch");

module.exports = {
  getAllWebinars: async (req, res) => {
    const all_ever_api = `https://api.webinarjam.com/everwebinar/webinars?api_key=${REACT_APP_WEBINAR_KEY}`;
    const fetch_webinars = await fetch(all_ever_api, {
      method: "POST",
      headers: {
        "Content-Type": "*",
      },
    });
    const myWebinarsJson = await fetch_webinars.json();
    res.send(myWebinarsJson);
  },

  getWebinarInfo: async (req, res) => {
    console.log(req.body);
    const { webinar_id } = req.body;
    const ever_api = `https://api.webinarjam.com/everwebinar/webinar?api_key=${REACT_APP_WEBINAR_KEY}&webinar_id=${webinar_id}`;
    const fetch_response = await fetch(ever_api, {
      method: "POST",
      headers: {
        "Content-Type": "*",
      },
    });

    const myJson = await fetch_response.json();
    res.send(myJson);
  },

  registerUser: async (req, res) => {
    console.log(req.body);
    const {
      first_name,
      last_name,
      email,
      phone,
      webinar_id,
      schedule,
    } = req.body;
    const api_url = `https://api.webinarjam.com/everwebinar/register?api_key=${REACT_APP_WEBINAR_KEY}&schedule=${schedule}&webinar_id=${webinar_id}&first_name=${first_name}&last_name=${last_name}&email=${email}&phone=${phone}`;
    const fetch_user = await fetch(api_url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const myJson = await fetch_user.json();
    res.send(myJson);
  },
};
