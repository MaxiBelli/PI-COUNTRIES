const { Router } = require("express");
const { Op } = require("sequelize");
const { Activity, Country } = require("../db");


const router = Router();

//GET/ACTIVITIES/ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let activityById = await Activity.findOne({
      where: {id},
      include: Country,
    });
    activityById
       ? res.send(activityById)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).send(error);
  }
});
//GET/ACTIVITIES
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll({
       include: {
        model: Country,
        attributes: ['name'], 
        through: { 
            attributes: [],
        },
      }
    })
    return res.json(activities);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});



//POST/ACTIVITIES
// router.post("/", async (req, res) => {
//   let {
//      name,
//      difficulty,
//      duration, 
//      season, 
//      countries } = req.body;

//   let newActivity = await Activity.create({
//     name,
//     difficulty,
//     duration,
//     season,
//   });

//   let countryDb = await Country.findAll({
//           where: { name : countries }
//       })
//       newActivity.addCountries(countryDb)
//       res.send("Activity created successfuly!!")
//     })

    router.post("/", async (req, res) => {
      const { 
        name,
        difficulty,
        duration,
        season,
        countries 
      } = req.body;
      
      const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      let countryDb;
      if (Array.isArray(countries)) {
        countryDb = await Promise.all(
          countries.map((countries) => Country.findOne({
                      where: { name : countries }
                  })
          )
        );
      }
      if (countryDb) {
        await activity.setCountries(countryDb);
      }
      return res.send(activity);
    });


//PUT    
router.put("/:id", async (req , res) => {
  const { id } = req.params
  const activity = req.body

  try {
    let act = await Activity.update(activity, {
      where: {id}
    });
    return res.json ({ changed: true})
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})

//DELETE
router.delete("/:id", async (req , res) => {
  const { id } = req.params
 
  try {
    let act = await Activity.destroy({
      where: { id }
    });
    return res.json ({ erased: true})
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})


module.exports = router;
