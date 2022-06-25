
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const path = require('path');


app.use(cors()); //using cors for url redirection safety



// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.post("/api/textfarm/test_route", (req, res) => {
    if (!req.body.key) {
        //checking for api key here
      res.json({ message: "Bad request" });

    } else {
    
        res.json({
            message:{
                "status":"1",
                "msg":"Data received successfully...",
                "data":"Some data returns"
            }
        })
    }
  });

  app.post("/api/textfarm/test_route2", (req, res) => {
    if (!req.body.key) {
        //checking for api key here
      res.json({ message: "Bad request" });

    } else {
    
        res.json({
            message:{
                "status":"1",
                "msg":"Data received successfully...",
                "data":"Some data returns"
            }
        })
    }
  });

  app.listen(port, () => console.log(`App running on  port ${port}`));
