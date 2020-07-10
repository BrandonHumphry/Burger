// to import the orm
var orm = require("../config/orm");

// call the functions from the orm
var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    insertOne: function(cols, vals, callback) {
      orm.insertOne("burgers", cols, vals, function(res) {
        callback(res);
      });
    },
    updateOne: function(objColVals, state, callback) {
      orm.updateOne("burgers",  state, function(res) {
        callback(res);
      });
    },
    // deleteOne: function(state, callback){
    //   orm.deleteOne("burgers", state, function(res) {
    //     callback(res);
    //   });
    // }

  };
  // export the model functions to the controller.
  module.exports = burger;