const { Router } = require("express");
const { Op } = require("sequelize");
const { Activity, Country } = require("../db");

const router = Router();


router.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return res.json(activities);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});


router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  const activityAdd = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  let countryDb = await Country.findAll({
    where: { name: countries },
  });
  activityAdd.addCountries(countryDb);
  res.send("Activity created successfuly!!");
});



module.exports = router;
