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
  const {
     name,
     difficulty,
     duration, 
     season, 
     countries } = req.body;

  const activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  let countryDb;
  if (Array.isArray(countries)) {
    countryDb = await Promise.all(
      countries.map((ctry) => Country.findByPk(ctry))
    );
  }
  if (countryDb) {
    await activityCreated.setCountries(countryDb);
  }
  return res.send(activityCreated);
});

// router.post('/characters', async (req, res, next) => {//post con todo lo q me va a llegar x body
//   let { name,
//       nickname,
//       birthday,
//       img,
//       status,
//       createdInDb,
//       occupation,//abajo no le paso ocupacion xq tengo q hacer la relacion a aparte
//       } = req.body

//   let characterCreated = await Character.create ({//creo el personaje con todo esto
//       name,
//       nickname,
//       birthday,
//       img,
//       status,
//       createdInDb
//   })    

//   let occupationDb = await Occupation.findAll({//la ocupacion la tengo q encontrar en el modelo q tiene todas las ocupaciones
//       where: { name : occupation }//donde la ocupacion la tengo q encontrar con la q coincida con la q le paso x body
//   })
//   characterCreated.addOccupation(occupationDb)//al perdonaje creado le agrego la ocupacion q coincidio con el nombre
//   res.send("Character created successfuly!!")
// })


module.exports = router;
