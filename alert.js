const Keymetrics = require('kmjs-core');

// config
const km_token = process.env.KM_TOKEN;

let km = new Keymetrics();

setInterval(function(){},1000);

km.use('standalone', {
  refresh_token: km_token
});


let say = what => {
  // retrieve our buckets
  km.bucket.retrieveAll()
    .then((res) => {
      // find our bucket
      let bucket = res.data.find(bucket => bucket.name === 'Synergy Office IOT');

      km.actions.triggerAction(bucket._id, {
        server_name: 'led-control',
        process_id: 1,
        action_name: 'speak',
        opts: what
      }).then(rep => {console.log(rep.data);} );
    })
    .catch(console.error);
};

module.exports = say;
