const app = require("express")();
const bodyParser = require("body-parser");
const logger = require('morgan');

app.set('port', process.env.PORT || 9009);
app.use(logger('dev'));
app.use(bodyParser.json());

app.use((req, res) => {
    console.log(req);
    const { body } = req;
    if (body.data && body.data.item) {
        console.log(req.body.data.item.email)
    }
    res.end();
});

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });