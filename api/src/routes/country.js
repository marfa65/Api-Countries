const { Router } = require("express");
const router = Router();
const { getDbAll, getApiInfo, getByName, getById } = require("./utils.js");

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
  const { name } = req.query;
  try {
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
