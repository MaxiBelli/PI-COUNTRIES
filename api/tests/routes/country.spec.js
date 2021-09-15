/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

// const agent = session(app);
// const country = {
//   name: 'Argentina',
// };

// describe('Country routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Country.sync({ force: true })
//     .then(() => Country.create(pokemon)));
//   describe('GET /countries', () => {
//     it('should get 200', () =>
//       agent.get('/countries').expect(200)
//     );
//   });
// });
const agent = session(app);
const country = [{
  "id": "ARG",
  "name": "ARGENTINA",
  "image": "https://restcountries.eu/data/arg.svg",
  "continent": "Americas",
  "capital": "Buenos Aires",
  "subregion": "South America",
  "area": 2780400,
  "population": 43590400
}]

const country2={
  "id": "AFG",
  "name": "AFGHANISTAN",
  "image": "https://restcountries.eu/data/afg.svg",
  "continent": "Asia",
  "capital": "Kabul",
  "subregion": "Southern Asia",
  "area": 652230,
  "population": 27657145,
  "activities": []
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it ('responds with 200 when there are matches', () => agent.get('/countries?name=Peru').expect(200));
    it ('responds with 200 when there are matches', () => agent.get('/countries?name=a').expect(200));
    it ('responds with 400 if the country does not exists', () => agent.get('/countries?name=London').expect(400));
    it ('responds with 400 if the country does not exists', () => agent.get('/countries?name=Mordor').expect(400));
    it ('responds with an array in case you found the country', () => agent.get('/countries?name=ARGENTINA').expect(function (res){
      expect(res.body).to.deep.equal(country)}));
  });

  describe('/countries/:id', function() {
    it ('responds with 400 and a msg if the id is wrong', () => agent.get('/countries/PRB').expect(400).expect('Content-Type', /json/));
    it ('responds with an object in case you found the country', () => agent.get('/countries/AFG').expect(function (res){
      expect(res.body).to.deep.equal(country2)}));
  })
});