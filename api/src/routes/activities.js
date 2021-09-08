const { Router } = require("express");
const { Op } = require("sequelize");
const { Activity, Country } = require("../db");


const router = Router();

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



router.post("/", async (req, res) => {
  let {
     name,
     difficulty,
     duration, 
     season, 
     countries } = req.body;

  let newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  let countryDb = await Country.findAll({
          where: { name : countries }
      })
      newActivity.addCountries(countryDb)
      res.send("Activity created successfuly!!")
    })


// router.put("/:id", async (req , res) => {
//   const { id } = req.params
//   const activity = req.body

//   try {
//     let act = await Activity.update(activity, {
//       where: {
//         id: id
//       }
//     });
//     return res.json ({ changed: true})
//   } catch (error) {
//     res.status(400).send("Something went wrong");
//   }
// })

// router.delete("/:id", async (req , res) => {
//   const { id } = req.params
 
//   try {
//     let act = await Activity.destroy(activity, {
//       where: {
//         id: id
//       }
//     });
//     return res.json ({ erased: true})
//   } catch (error) {
//     res.status(400).send("Something went wrong");
//   }
// })


module.exports = router;
