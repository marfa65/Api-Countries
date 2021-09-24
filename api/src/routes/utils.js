const axios = require("axios");
const { Country, Activity, Op } = require("../db");

// *******     COUNTRIES     ******

//initial DB load---carga inicial de BD
const getApiInfo = async function () {
  try {
    const apiUrl = (await axios("https://restcountries.com/v2/all")).data;
    // const apiUrl = (await axios("https://restcountries.eu/rest/v2/all")).data;
    // https://restcountries.com/v2/all direccion nueva

    for (let i = 0; i < apiUrl.length; i++) {
      let c = apiUrl[i];
      Country.findOrCreate({
        where: {
          id: c.alpha3Code,
          name: c.name,
          flag: c.flags[1],
          // flag: c.flag, //flags []
          continent: c.continent,
          // continent: c.region,// continent
          capital: c.capital,
          subregion: c.region,
          // subregion: c.subregion, // region
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
    const infoDb = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    });

    let infoCountries = infoDb.map((c) => (c = c.dataValues));
    infoCountries = infoCountries.map((c) => {
      return {
        id: c.id,
        name: c.name,
        flag: c.flag,
        continent: c.continent,
        population: c.population,
        activities: c.activities.map((el) => el),
      };
    });
    return infoCountries;
    //   PAGINADO >>>>>>>>>>>>>>>
    // let pageNumber = Number(page);
    // let size = 10;
    // const totalPages = Math.ceil(infoCountries.length / size) + 1;
    // if (!pageNumber || pageNumber > totalPages) pageNumber = 1; // si no me pasan pag pongo pag 1 por default
    // if (
    //   pageNumber &&
    //   !Number.isNaN(pageNumber) &&
    //   pageNumber > 0 &&
    //   pageNumber <= totalPages
    // ) {
    //   if (pageNumber === 1) {
    //     size = 9;
    //     return infoCountries.slice(
    //       size * (pageNumber - 1),
    //       size * (pageNumber - 1) + size
    //     );
    //   }
    //   if (pageNumber > 1) {
    //     size = 10;
    //     return infoCountries.slice(
    //       size * (pageNumber - 1) - 1,
    //       size * (pageNumber - 1) + size - 1
    //     );
    //   }
    // }

    // COMPROBACION *****************
    // let array = [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //   22, 23, 24, 25, 26, 27, 28, 29, 30,
    // ];
    // let pageNumber = Number(page);
    // let size = 10;
    // const totalPages = Math.ceil(array.length / size) + 1; // la primer pag tiene 9 por eso sumo 1 para agregar una pag mas
    // // if (!pageNumber || pageNumber > totalPages || pageNumber < 1)
    // pageNumber = 1; // si no me pasan pag pongo pag 1 por default
    // if (
    //   pageNumber &&
    //   !Number.isNaN(pageNumber) &&
    //   pageNumber > 0 &&
    //   pageNumber <= totalPages
    // ) {
    //   if (pageNumber === 1) {
    //     size = 9;
    //     console.log(
    //       "size 9",
    //       array.slice(size * (pageNumber - 1), size * (pageNumber - 1) + size)
    //     );
    //   }
    //   if (pageNumber > 1) {
    //     size = 10;
    //     console.log(
    //       "size 10",
    //       array.slice(
    //         size * (pageNumber - 1) - 1,
    //         size * (pageNumber - 1) + size - 1
    //       )
    //     );
    //   }
    // }
    // else {
    //   pageNumber = 1;
    // }
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
      // through: {
      //   attributes: [],
      // },
      include: {
        model: Activity,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
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

// const getOrderAlphabet = async function (by, asc) {
//   console.log("parametros", by, asc);
//   try {
//     const infoDb = await Country.findAll({
//       include: {
//         model: Activity,
//         attributes: ["id", "name"],
//         through: {
//           attributes: [],
//         },
//       },
//     });
//     let infoCountries = infoDb.map((c) => (c = c.dataValues));
//     infoCountries = infoCountries.map((c) => {
//       return {
//         id: c.id,
//         name: c.name,
//         flag: c.flag,
//         continent: c.continent,
//         population: c.population,
//         activities: c.activities.map((el) => el),
//       };
//     });
//     if (asc === "false") {
//       infoCountries.sort((a, b) => (a[by] > b[by] ? -1 : 1));
//     } else {
//       infoCountries.sort((a, b) => (a[by] > b[by] ? 1 : -1));
//     }

//     return infoCountries;
// return infoCountries;
// if (order == asc) {
//   // let hola = infoCountries.map((e) => (e = e.name));
//   // return hola.sort();
//   console.log("ascccccccccccccc");
//   return asc;
//   // return infoCountries.sort((a, b) => (a.color > b.color ? 1 : -1));

// let orderAsc = infoCountries.map((e) => (e = e.name));
// return orderAsc.sort();
// console.log(
//   "xxxxxxxxxxx",
//   infoCountries.sort((a, b) => a.name - b.name)
// );
// return infoCountries.sort((a, b) => a.name - b.name);
// }
// if (desc) {
//   return infoCountries.sort((a, b) => b.name - a.name);
// }
// let hola = infoCountries.map(e => e = e.name);
// return hola.sort()

//   items.sort(function (a, b){
//     return (b.value - a.value)
// })
//   } catch (error) {
//     return error;
//   }
// };

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
  // getOrderAlphabet,
};
