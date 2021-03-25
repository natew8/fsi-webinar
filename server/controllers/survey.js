module.exports = {
  surveyData: async (req, res) => {
    console.log(req.body);
    const {
      years,
      focus,
      comment,
      webinarId,
      schedule,
      firstName,
      lastName,
      phone,
      email,
    } = req.body;
    const db = req.app.get("db");

    try {
      const survey = db.fsi_webinar_attendees.insert({
        yrs_to_retire: years,
        focus,
        comments: comment,
        webinar_id: webinarId,
        schedule,
        first_name: firstName,
        last_name: lastName,
        phone,
        email,
      });
      return res.status(200).send(survey);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
};
