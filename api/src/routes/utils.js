const axios = require("axios");
require("dotenv").config();
const { Country, Activity, Op } = require("../db");

const getApiInfo = async function () {
  try {
    const apiUrl = (await axios("https://restcountries.eu/rest/v2/all")).data;

    for (let i = 0; i < apiUrl.length; i++) {
      let c = apiUrl[i];
      Country.findOrCreate({
        where: {
          id: c.alpha3Code,
          name: c.name,
          flag: c.flag,
          continent: c.region,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        },
      });
    }
    const allCountries = await Country.findAll();
    return allCountries;
  } catch (error) {
    console.log("error en servidor:", error);
  }
};

const getDbAll = async function () {
  try {
    const infoDb = await Country.findAll({});

    let infoCountries = infoDb.map((c) => (c = c.dataValues));
    infoCountries = infoCountries.map((c) => {
      return {
        id: c.id,
        name: c.name,
        flag: c.flag,
        continent: c.continent,
      };
    });

    return infoCountries;
  } catch (error) {
    console.log("error en servidor local:", error);
  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ARMAR CON ESTO DE ABAJO, POR NOMBRE, LO DE LAS ACIVIDADES VA CUANDO SEA POR ID  ### verificar tambien con toLowerCase los nombres

const getByName = async function () {
  try {
    let countryName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
// include: {
//   model: Activity,
//   attributes: ["name", "difficulty", "duration", "season"],
//   through: {
//     attributes: [],
//   },
// },
// let nameDb = await Country.findAll({
//   where: { name: { [Op.like]: `%${name}%` } },
//   include: Activity,
// });
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
module.exports = {
  getApiInfo,
  getDbAll,
};
