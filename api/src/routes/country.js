const { Router } = require("express");
const axios = require("axios");
const router = Router();
require("dotenv").config();
const { Country, Activity } = require("../db.js");
const { getDbAll, getApiInfo } = require("./utils.js");

router.get("/api", async (req, res) => {
  try {
    const countriesApi = await getApiInfo();
    // console.log("paises:", countriesAll);
    res.status(200).send(countriesApi);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const countriesAll = await getDbAll();

    res.status(200).send(countriesAll);
  } catch (error) {
    console.log(error);
  }
});

router.get("/country/name", async (req, res) => {
  const { name } = req.query;
  try {
    let countryName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    res.status(200).send(countryName);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// router.get("/", async (req, res) => {
//   const { name } = req.query;
//   try {
//     const countriesAll = await getDbAll();
//     // console.log("countriesAll:", countriesAll);
//     if (name) {
//       // si me pasan un nombre obtengo el o los paises con ese nombre
//       let countryName = await countriesAll.filter((e) =>
//         e.name.toLowerCase().includes(name.toLowerCase())
//       );
//       countryName.length
//         ? res.status(200).send(countryName)
//         : res.status(404).send("no se encontraron países con ese nombre");
//     } else {
//       res.status(200).send(countriesAll);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
