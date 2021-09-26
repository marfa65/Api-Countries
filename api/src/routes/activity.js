const { Router } = require("express");
const router = Router();
const { postActivity } = require("./utils.js");

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  name
    ? name.toLowerCase()
    : res.status(404).json({ msg: "debe colocar un nombre a la actividad" });
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

module.exports = router;
