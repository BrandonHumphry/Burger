// to import the orm
const orm = require("../config/orm");

// call the functions from the orm
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, state, cb) {
      orm.updateOne("burgers", objColVals, state, function(res) {
        cb(res);
      });
    }
  };
  
  // export the model functions to the controller.
  module.exports = burger;