module.exports = {
  surveyData: async (req, res) => {
    console.log(req.body);
    const {
      years,
      focus,
      comment,
      webinar_id,
      schedule,
      first_name,
      last_name,
      phone,
      email,
    } = req.body;
    const db = req.app.get("db");

    try {
      const survey = db.fsi_webinar_attendees.insert({
        yrs_to_retire: years,
        focus,
        comments: comment,
        webinar_id,
        schedule,
        first_name,
        last_name,
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
