const clearbit_key = process.env.CLEARBIT_KEY;

var clearbit = require('clearbit')(clearbit_key);
var Person = clearbit.Person;


let enrich = email => {
  return Person.find({email: email})
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
      console.log('Bad/invalid request, unauthorized, Clearbit error, or failed request');
    });
};

// enrich('alexandre@keymetrics.io')

