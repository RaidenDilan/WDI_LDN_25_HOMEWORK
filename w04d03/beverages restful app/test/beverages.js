/* global should, expect, beforeEach, describe, it */

// DONE
const should = require('chai').should();
// DONE
const expect = require('chai').expect;
// DONE
const server = require('../server');
// DONE
const app = require('supertest')(server); // SENDS FAKE TESTS TO SERVER
// DONE
const Beverage = require('../models/beverage');
// DONE
const testData = [{
  type: 'Gin',
  name: 'Sipsmiths',
  abv: 40,
  origin: 'London',
  image: 'https://img.thewhiskyexchange.com/900/gin_sip5.jpg'
}, {
  type: 'Digestif',
  name: 'Jägermister',
  abv: 35,
  origin: 'Germany',
  image: 'https://img.thewhiskyexchange.com/540/liq_jag1.jpg'
}];
// DONE
beforeEach((done) => {
  Beverage.collection.drop();
  Beverage.create(testData, done);
});

// INDEX
// X to keep it pending
// TEST PASSED
xdescribe('GET /beverages', () => {

  it('should return a 200 response', (done) => {
    app.get('/beverages')
      .expect(200, done);
  });

  it('should display all the beverages', (done) => {
    app.get('/beverages')
      .end((err, res) => {
        testData.forEach((record) => {
          expect(res.text).to.contain(`<h2>${record.name}</h2>`);
          expect(res.text).to.contain(`<h4>${record.type}</h4>`);
          expect(res.text).to.contain(`<p>${record.abv}</p>`);
          expect(res.text).to.contain(`<p>${record.origin}</p>`);
          expect(res.text).to.contain(`src="${record.image}"`);
        });

        done();
      });
  });
});

// CREATE
// X to keep it pending
// TEST PASSED
xdescribe('GET /beverages', () => {

  it('should return a 200 response', (done) => {
    app.get('/beverages')
      .expect(200, done);
  });

  it('should display all the beverages', (done) => {
    app.get('/beverages')
      .end((err, res) => {
        testData.forEach((record) => {
          expect(res.text).to.contain(`<h2>${record.name}</h2>`);
          expect(res.text).to.contain(`<h4>${record.type}</h4>`);
          expect(res.text).to.contain(`<p>${record.abv}</p>`);
          expect(res.text).to.contain(`<p>${record.origin}</p>`);
          expect(res.text).to.contain(`src="${record.image}"`);
        });

        done();
      });
  });
});


// NEW
// X to keep it pending
// TEST PASSED
xdescribe('GET /beverages/new', () => {

  it('should return a 200 response', (done) => {
    app.get('/beverages/new')
      .expect(200, done);
  });

  it('should display a form', (done) => {
    app.get('/beverages/new')
      .end((err, res) => {
        expect(res.text).to.contain('<form method="POST" action="/beverages">');
        expect(res.text).to.contain('name="name"');
        expect(res.text).to.contain('name="type"');
        expect(res.text).to.contain('name="abv"');
        expect(res.text).to.contain('name="origin"');
        expect(res.text).to.contain('name="image"');
        done();
      });
  });
});

// SHOW
// X to keep it pending
// TEST PASSED
describe('GET /beverages/:id', () => {

  let record = null;
  beforeEach((done) => {
    Beverage.findOne({ name: 'Sipsmiths' }, (err, beverage) => {
      record = beverage;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    app.get(`/beverages/${record.id}`)
      .expect(200, done);
  });

  it('should display all the beverages', (done) => {
    app.get(`/beverages/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain('<h2>Sipsmiths</h2>');
        expect(res.text).to.contain('<h4>Gin</h4>');
        expect(res.text).to.contain('<p>40</p>');
        expect(res.text).to.contain('<p>London</p>');
        expect(res.text).to.contain('src="https://img.thewhiskyexchange.com/900/gin_sip5.jpg"');
        done();
      });
  });

  it('should display an edit link', (done) => {
    app.get(`/beverages/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain(`href="/beverages/${record.id}/edit"`);
        done();
      });
  });

  it('should display a delete form', (done) => {
    app.get(`/beverages/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain(`<form method="POST" action="/beverages/${record.id}">`);
        expect(res.text).to.contain(`<input type="hidden" name="_method" value="DELETE">`);
        done();
      });
  });
});

// EDIT
// X to keep it pending
// TEST PASSED
describe('PUT /beverages/:id/edit', () => {

  let record = null;
  beforeEach((done) => {
    Beverage.findOne({ name: 'Sipsmiths' }, (err, beverages) => {
      record= beverages;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    app.get(`/beverages/${record.id}`)
      .expect(200, done);
  });

  it('should display a pre-populated form', (done) => {
    app.get(`/beverages/${record.id}/edit`)
      .end((err, res) => {
        expect(res.text).to.contain(`<form method="POST" action="/beverages/${record.id}">`);
        expect(res.text).to.contain('<input type="hidden" name="_method" value="PUT">');
        expect(res.text).to.contain('value="Sipsmiths"');
        expect(res.text).to.contain('value="Gin"');
        expect(res.text).to.contain('value="40"');
        expect(res.text).to.contain('value="London"');
        expect(res.text).to.contain('value="https://img.thewhiskyexchange.com/900/gin_sip5.jpg"');
        done();
      });
  });
});

// UPDATE
// X to keep it pending
// TEST NOT PASSED <<<----------------------------------------------------------<<<
xdescribe('PUT /beverages/:id', () => {

  let record = null;
  beforeEach((done) => {
    Beverage.findOne({ name: 'Sipsmiths' }, (err, beverage) => {
      record = beverage;
      done();
    });
  });

  it('should redirect to /beverages/:id', (done) => {
    app.put(`/beverages/${record.id}`)
      .type('form')
      .send({
        name: 'Gordons',
        type: 'Gin',
        abv: 35,
        origin: 'London',
        image: 'https://img.thewhiskyexchange.com/900/gin_sip1.jpg'
      })
      .end((err, res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal(`/beverages/${record.id}`);
        done();
      });
  });

  it('should update an existing beverage', (done) => {
    app.put(`/beverages/${record.id}`)
    .type('form')
    .send({
      name: 'Giggity',
      type: 'Gin',
      abv: 45,
      origin: 'UK',
      image: 'https://img.thewhiskyexchange.com/900/gin_sip1.jpg'
    })
    .end(() => {
      app.get(`/beverages`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain('<h2>Giggity</h2>');
        expect(res.text).to.contain('<h4>Gin</h4>');
        expect(res.text).to.contain('<p>45</p>');
        expect(res.text).to.contain('<p>UK</p>');
        expect(res.text).to.contain('src="https://img.thewhiskyexchange.com/900/gin_sip1.jpg"');
        done();
      });
    });
  });
});

// DELETE
// X to keep it pending
// TEST PASSED
xdescribe('DELETE /beverages/:id', () => {

  let record = null;
  beforeEach((done) => {
    Beverage.findOne({ name: 'Jägermister' }, (err, beverage) => {
      record = beverage;
      done();
    });
  });

  it('should redirect to /beverages', (done) => {
    app.delete(`/beverages/${record.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal('/beverages');
        done();
      });
  });

  it('should delete the beverage', (done) => {
    app.delete(`/beverages/${record.id}`)
      .end(() => {
        app.get('/beverages')
        .end((err, res) => {
          expect(res.text).to.not.contain(`<h2>Jägermeister</h2>`);
          done();
        });
      });
  });
});
