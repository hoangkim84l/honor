
var bodyParser = require('body-parser');
var app = require('express')();
var ErrorProvider = require('./Provider/error-provider');

//set parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect mongodb
var db = require('./models/db.config');
db.initialize();

//router
 var routeConfig = require('./controllers/route.config');
 routeConfig.initialize(app);

// error handle
app.use(ErrorProvider.LogErrorHandle);
app.use(ErrorProvider.ClientErrorHandle);
app.use(ErrorProvider.SystemErrorHandle);

module.exports = app;
