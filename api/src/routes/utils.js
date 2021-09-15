const axios = require("axios");
const { Country, Activity, Op } = require("../db");

// *******     COUNTRIES     ******

//initial DB load---carga inicial de BD
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
    console.log("error en servidor externo:", error);
    return error;
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
    return error;
  }
};

const getByName = async function (name) {
  try {
    let countryName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      attributes: ["name", "id", "flag", "continent"],
      through: {
        attributes: [],
      },
    });
    return countryName;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getById = async function (id) {
  try {
    // let countryId = await Country.findByPk(id, { include: Activity });
    let countryId = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });

    return countryId;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// *******     ACTIVITY     *******

const postActivity = async function (
  name,
  difficulty,
  duration,
  season,
  country
) {
  try {
    let activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await activity.setCountries(country);
    let newActivity = await Activity.findByPk(activity.id, {
      include: {
        model: Country,
        attributes: ["name", "id"],
        through: { attributes: [] },
      },
    });

    return newActivity;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getApiInfo,
  getDbAll,
  getByName,
  getById,
  postActivity,
};
