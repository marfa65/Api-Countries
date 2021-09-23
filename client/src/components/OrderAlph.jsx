// const getOrderAlphabet = async function (by, asc) {
//     console.log("parametros", by, asc);
//     try {
//       const infoDb = await Country.findAll({
//         include: {
//           model: Activity,
//           attributes: ["id", "name"],
//           through: {
//             attributes: [],
//           },
//         },
//       });
//       let infoCountries = infoDb.map((c) => (c = c.dataValues));
//       infoCountries = infoCountries.map((c) => {
//         return {
//           id: c.id,
//           name: c.name,
//           flag: c.flag,
//           continent: c.continent,
//           population: c.population,
//           activities: c.activities.map((el) => el),
//         };
//       });
//       if (asc === "false") {
//         infoCountries.sort((a, b) => (a[by] > b[by] ? -1 : 1));
//       } else {
//         infoCountries.sort((a, b) => (a[by] > b[by] ? 1 : -1));
//       }
  
//       return infoCountries;
// } catch (error) {
//     return error;
//   }
// };