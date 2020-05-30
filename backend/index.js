const bodyParser = require('body-parser')

const express = require('express')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const contactRoute = require('./routes/contact')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
        next();
      });   
app.use(contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("Server is listening on: " + PORT)