let express = require('express');
let bodyParser = require('body-parser');
let exphbs = require('express-handlebars');
let routes = require('./controllers/burgers_controller.js');
let app = express();


app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set ('view engine', 'handlebars');

app.use('/', routes);

app.listen(process.env.PORT || 8080);

