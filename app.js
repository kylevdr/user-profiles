const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const userCtrl = require('./controllers/userCtrl');
const profileCtrl = require('./controllers/profileCtrl');

const app = express();
let port = 3000;
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Listening on port', port);
});

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);
