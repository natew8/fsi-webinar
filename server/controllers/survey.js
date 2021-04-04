module.exports = {
  surveyData: async (req, res) => {
    console.log(req.body.scheduleDate);
    const {
      years,
      focus,
      investable_assets,
      comment,
      webinar_id,
      scheduleDate,
      first_name,
      last_name,
      phone,
      email,
      presenter,
    } = req.body;
    const db = req.app.get("db");

    try {
      const survey = db.fsi_webinar_clients.insert({
        yrs_to_retire: years,
        focus,
        investable_assets,
        comments: comment,
        webinar_id,
        schedule: scheduleDate,
        first_name,
        last_name,
        phone,
        email,
        presenter,
      });
      return res.status(200).send(survey);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
};
