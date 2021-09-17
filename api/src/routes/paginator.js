const router = require("./country");
const { Router } = require("express");
const router = Router();
const { Country } = require("../db");

//   http:localhost:3001/countries?page=2&size=10

router.get("/page", async (req, res) => {
  const { page, size } = req.query;
  const pageAsNumber = Number.parseInt(page);
  const sizeAsNumber = Number.parseInt(size);
  let page = 1;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  //   let size = 10;
  if (
    !Number.isNaN(sizeAsNumber) &&
    sizeAsNumber > 0 &&
    size > sizeAsNumber < 10
  ) {
    size = sizeAsNumber;
  }
  const countries = await Country.findAndCountAll({
    limit: size,
    offset: page * size,
  });
  res.send({
    content: countries.rows,
    totalPages: Math.ceil(countries.count / size),
  });
});
module.exports = router;
