const mocha = require('mocha')
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe our tests
describe('Finding records', () => {

  beforeEach((done) => {
    const char = new MarioChar({
      name: 'Mario'
    });

    char
      .save()
      .then(() => {
        assert(!char.isNew);
        done();
      });
  });

  // Create tests
  it('Finds one record from the database',
    (done) => {
      MarioChar
        .findOne({ name: 'Mario' })
        .then((result) => {
          assert(result.name === 'Mario');
        });
    });
}); 
