/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};


describe("Rutas", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() => conn.sync({ force: false }));

  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
    it("Expects content type to be JSON", () => {
      agent.get("/countries").expect("Content-Type", /json/);
    });
  });
  describe("POST /activities", () => {
    it("Expects content type to be JSON", () => {
      agent.get("/countries").expect("Content-Type", /json/);
    });
  });
});
