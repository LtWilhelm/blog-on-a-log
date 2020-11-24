const express = require("express");
const app = express();
require('dotenv').config();
const path = require('path')
const fs = require('fs')
const db = require("./models")
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

app.use(bodyParser.json())

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => console.log(`App running on port ${PORT}`))