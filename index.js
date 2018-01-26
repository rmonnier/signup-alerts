const app = require("express")();
const bodyParser = require("body-parser");
const logger = require('morgan');
const enrich = require('./enrich');
const say = require('./alert');

app.set('port', process.env.PORT || 9009);
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(async (req, res) => {
    const { body } = req;
    if (body.data && body.data.item) {
        const { email } = req.body.data.item;

        console.log(email);
        const userEnriched = await enrich(email);
        say(`New user ${userEnriched.name.fullName} just signed up !`);
        console.log(userEnriched);
    }
    res.end();
});

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });