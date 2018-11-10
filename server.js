
let express = require('express');
let methodOverride = require('method-override');
let bodyParser = require('body-parser');


let app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(methodOverride('_method'));
let exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(process.env.PORT || 8080);

