const express = require('express');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

//Connection au server express
app.listen(port, () => {
  console.log('Connection au serveur ok !');
}) 

