const express = require("express");

const router = express.Router();

// Import the burger (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {
    burger.insertOne(["burger_name", "double"], [req.body.burger_name, req.body.double], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var state = "id = " + req.params.id;
  
    console.log("state", state);
    burger.updateOne({double: req.body.double}, state, function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

module.exports = router;