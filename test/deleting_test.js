const mocha = require('mocha')
const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe our tests
describe('Deleting records', () => {

  let char;

  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario'
    });

    char
      .save()
      .then(() => {
        done();
      });
  });

  // Create tests
  it('Deletes one record from the database',
    (done) => {

      MarioChar
        .findOneAndDelete({ name: 'Mario' })
        .then(() => {

          MarioChar
            .findOne({ name: 'Mario' })
            .then((result) => {
              assert(result === null);
              done();
            });
            
        });

    });

}); 
