const { Country, Activity, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("continent", () => {
      it("should throw an error if continent is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid continent")))
          .catch(() => done());
      });
      it("should work when its a valid continent", () => {
        Country.create({
          name: "Argentina",
          id: "ARG",
          flag: "bandera Argentina",
          continent: "Americas",
          capital: "Buenos Aires",
        });
      });
    });
  });
});

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Activity.create({})
          .then(() => done(new Error("It requires a name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Activity.create({ name: "surf" });
      });
    });
  });
});
