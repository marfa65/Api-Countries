const { Router } = require("express");
const router = Router();
const {
  getDbAll,
  getApiInfo,
  getByName,
  getById,
  // getOrderAlphabet,
} = require("./utils.js");

// WARNING !! this path was created only to load the local DB in the first instance.
// ADVERTENCIA !! esta ruta fue creada solo para cargar la base de datos local en la primera instancia.
router.get("/api", async (req, res) => {
  try {
    const countriesApi = await getApiInfo();

    res.status(200).send(countriesApi);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      let countryName = await getByName(name);
      countryName.length
        ? res.status(200).send(countryName)
        : res.status(404).send("no se encontraron países con ese nombre");
    } else {
      const countriesAll = await getDbAll();
      res.status(200).send(countriesAll);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// router.get("/order", async (req, res) => {
//   const { by, asc } = req.query;
//   try {
//     const countriesOrder = await getOrderAlphabet(by, asc);
//     res.status(200).send(countriesOrder);

//     // if (desc) {
//     //   const countriesDesc = await getOrderAlphabet(desc);
//     //   res.status(200).send(countriesDesc);
//     // }
//     // res.send("ok");
//   } catch (error) {
//     res.send(error);
//   }
//   // res.send("ok");
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const countryId = await getById(id);
    res.status(200).send(countryId);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
