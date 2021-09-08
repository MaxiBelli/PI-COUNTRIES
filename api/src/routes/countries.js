const {Router} = require("express");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const router = Router();


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let countryById = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    });
    countryById
       ? res.send(countryById)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const countryName = await Country.findAll({
       where: {
              name: { [Op.iLike]: `%${name}%`}
        },
        include: Activity,
      })
      countryName.length ?
      res.status(200).json(countryName) :
      res.status(404).send('No se encontró el pais')
     
    } else {
      const countries = await Country.findAll({
        include: [{ model: Activity, require: true }],
      })
      res.send(countries);
    }
  } catch (error) {
       res.status(404).send(error);
  }
});

module.exports = router;