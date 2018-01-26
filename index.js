const app = require("express")();
const bodyParser = require("body-parser");

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());

app.use((req, res) => {
    console.log("Incoming request");
})

app.post("/", (req, res) => {

    console.log(req.body);

  res.send(200);
});

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });

// analytics.track({
//     userId: '5a6b112ab287a06b8e6bbeec',
//     event: 'account_created',
//     properties: {
//       category: 'registration_page',
//       label: 'oauth-app'
//     }
//   });

//   analytics.identify('5a6b112ab287a06b8e6bbeec', {
//     buckets: [],
//     company: 'Érer',
//     company_size: '5-15 employees',
//     created_at: new Date('2018-01-26T11:29:46.000Z'),
//     email: 'rmonnier@laposte.net',
//     has_credit_card: false,
//     name: 'rmonnierfdf',
//     providers: [],
//     role: 'DevOps',
//     servers: 0,
//     type: 'ghost'
//   });