const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

// router.post("/", async (req, res) => {
//   try {
//     const { name, difficulty, duration, season, country } = req.body;
//     const newActivity = await Activity.create({
//       name,
//       difficulty,
//       duration,
//       season,
//     });
//     await newActivity.setCountry(country);
//     res.send(newActivity);
//   } catch (error) {
//     // console.log(error);
//     res.send(err);
//   }
// });

module.exports = router;
