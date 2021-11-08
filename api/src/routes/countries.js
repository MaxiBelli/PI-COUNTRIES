const { Router } = require("express");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const router = Router();

async function getApiCountries(req, res, next) {
  try {
    const apiUrl = await axios.get("https://restcountries.eu/rest/v2/all");
    const countriesInfo = await apiUrl.data;

    countriesInfo.map(async (el) => {
      try {
        const [country, created] = await Country.findOrCreate({
          where: {
            id: el.alpha3Code,
          },

          defaults: {
            id: el.alpha3Code,
            name: el.name === "Åland Islands" ? "Aland Islands" : el.name,
            flag: el.flag,
            continent: el.region,
            capital: el.capital,
            subregion: el.subregion,
            area: el.area,
            population: el.population,
          },
        });

        return country;
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    next(error);
  }
}

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let countryById = await Country.findByPk(id.toUpperCase(), {
      include: Activity,
    });
    countryById ? res.send(countryById) : res.sendStatus(404);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  await getApiCountries();
  const { name } = req.query;
  try {
    if (name) {
      const countryName = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Activity,
      });
      countryName.length
        ? res.status(200).json(countryName)
        : res.status(404).send("The country with that name was not found");
    } else {
      const countries = await Country.findAll({
        include: [{ model: Activity, require: true }],
      });
      res.send(countries);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;


