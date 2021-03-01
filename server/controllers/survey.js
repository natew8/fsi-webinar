module.exports = {
  surveyData: async (req, res) => {
    console.log(req);
    const db = req.app.get("db");
    console.log(db);
  },
};
