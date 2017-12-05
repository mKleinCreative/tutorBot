const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const index = require('./api/index')

const PORT = process.env.PORT || 8675;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(index)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})
