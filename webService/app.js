const express = require('express');
const app = express();
const router = express.Router();
// const db = require('./db');
const webservice = require('./routes/webservice');

const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

app.use('/webService1', webservice);
app.use('/webService4', webservice);
app.use('/webService3', webservice);
app.use('/webService4', webservice);
app.use('/webService5', webservice);


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
