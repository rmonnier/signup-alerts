const clearbit = require('clearbit')(process.env.CLEARBIT_KEY);
console.log(process.env.CLEARBIT_KEY)
const Person = clearbit.Person;


let enrich = async email => {
  return await Person.find({email: email})
    .then(function (person) {
      console.log(person);
      return person;
    })
    .catch(Person.QueuedError, function (err) {
      console.log(err); // Person is queued
    })
    .catch(Person.NotFoundError, function (err) {
      console.log(err); // Person could not be found
    })
    .catch(function (err) {
      console.log('Bad/invalid request, unauthorized, Clearbit error, or failed request', err);
    });
};

module.exports = enrich;

// enrich('alexandre@keymetrics.io')

