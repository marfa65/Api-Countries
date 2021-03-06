const { Router } = require("express");
const router = Router();
const { postActivity, getActivity } = require("./utils.js");

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  name
    ? name.toLowerCase()
    : res.status(404).json({ msg: "It requires a name" });
  try {
    const activityCreated = await postActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );

    res.json(activityCreated);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allActivity = await getActivity();
    res.json(allActivity);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
