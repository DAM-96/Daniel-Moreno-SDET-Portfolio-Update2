const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 80;

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static("public"));

//Redirect to homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Run server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);