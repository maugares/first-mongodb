const mocha = require('mocha')
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe our tests
describe('Finding records', () => {

  // Create tests
  it('Saves a record to the database', (done) => {

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

});
