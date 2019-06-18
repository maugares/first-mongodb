const assert = require('assert');
const MarioChar = require('../models/marioChar');

// Describe our tests
describe('Updating records', () => {

  let char;

  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
      weight: 50,
    });

    char
      .save()
      .then(() => {
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

  // Test update operators. More on: https://docs.mongodb.com/manual/reference/operator/update/
  it('Increments the weight by 1',
    (done) => {

      MarioChar
        .updateMany({}, { $inc: { weight: 1 } })
        .then(() => {

          MarioChar
            .findOne({ name: 'Mario' })
            .then((record) => {
              assert(record.weight === 51);
              done();
            });

        });

    });

}); 
