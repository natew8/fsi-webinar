module.exports = {
  surveyData: async (req, res) => {
    console.log(req.body);
    const { years, focus, comment, webinarId, schedule } = req.body;
    const db = req.app.get("db");
    const survey = db.fsi_webinar_responses.insert();
  },
};
