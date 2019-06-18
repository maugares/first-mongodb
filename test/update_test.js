const mocha = require('mocha')
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe our tests
describe('Updating records', () => {

  let char;

  beforeEach((done) => {
    char = new MarioChar({
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
  it('Updates one record in the database',
    (done) => {

      MarioChar
        .findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' })
        .then(() => {

          MarioChar
            .findOne({ _id: char._id })
            .then((result) => {
              assert(result.name === 'Luigi');
              done();
            });

        });

    });

}); 
