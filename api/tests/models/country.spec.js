const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe("Activity model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("Activity", () => {
      it("should throw an error if no information is provided", (done) => {
        Activity.create({})
          .then(() => done(new Error("Someting went wrong")))
          .catch(() => done());
      });
      it("should throw an error if no name is provided", (done) => {
        Activity.create({
          difficulty: 4,
          duration: 90,
          season: "Winter",
          countries: ["Argentina", "Suiza"],
        })
          .then(() => done(new Error("Name is required")))
          .catch(() => done());
      });
      it("should throw an error if datatypes don't match", (done) => {
        Activity.create({
          name: "Mountain Bike",
          difficulty: "Four",
          duration: 120,
          season: "Summer",
          countries: ["Australia", "España"],
        })
          .then(() => done(new Error("Datatypes are wrong")))
          .catch(() => done());
      });
      it("should throw an error if Season is not Summer, Autumn, Winter or Spring", (done) => {
        Activity.create({
          name: "Sky",
          difficulty: 4,
          season: "Verano",
          duration: 60,
          countries: ["Argentina", "Brazil"],
        })
          .then(() => done(new Error("Season param isn't valid")))
          .catch(() => done());
      });
    });
  });
  describe("Country", () => {
    it("should throw an error if no information is provided", (done) => {
      Country.create({})
        .then(() => done(new Error("Someting went wrong")))
        .catch(() => done());
    });
    it("should throw an error if no Id is provided", (done) => {
      Country.create({
        name: "Argentina",
        flag: "https://restcountries.eu/data/arg.svg",
        continent: "Americas",
      })
        .then(() => done(new Error("Country ID is required")))
        .catch(() => done());
    });
    it("should throw an error if datatypes don't match", (done) => {
      Country.create({
        id: 1,
        name: "Argentina",
        flag: "https://restcountries.eu/data/arg.svg",
        continent: "Americas",
      })
        .then(() => done(new Error("Datatypes are wrong")))
        .catch(() => done());
    });
  });
});
