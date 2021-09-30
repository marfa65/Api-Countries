/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Argentina", // debería pasarle el resto delos datos que son oblig.
  // id: "ARG",
  // flag: "bandera Argentina",
  // continent: "Americas",
  // capital: "Buenos Aires",
};

const activity = {
  name: "surf",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
});

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: true }).then(() => Activity.create(activity))
  );
  describe("GET /activity", () => {
    it("should get 200", () => agent.get("/activity").expect(200));
  });
});
