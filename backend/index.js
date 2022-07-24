const express = require("express");
const bodyParser = require("body-parser");
const { PORT = 3001 } = process.env;
const cors = require('cors');
const form = require('./routes/form')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb', {
});

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/form', form)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

