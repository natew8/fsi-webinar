module.exports = {
  surveyData: async (req, res) => {
    const {
      years,
      focus,
      investable_assets,
      comment,
      webinar_name,
      scheduleDate,
      first_name,
      last_name,
      phone,
      email,
      presenter,
    } = req.body;
    const db = req.app.get("db");

    try {
      const survey = await db.fsi_webinar_clients.insert({
        yrs_to_retire: years,
        focus,
        investable_assets,
        comments: comment,
        webinar_name,
        schedule: scheduleDate,
        first_name,
        last_name,
        phone,
        email,
        presenter,
      });
      console.log(survey)
      return res.status(200).send(survey);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
