const connection = require("connection.js");

const orm = {
    selectAll: function (tableInput, callback) {
      var queryString = `select * from ${tableInput}`;
      connection.query(query, function (err, result) {
        if (err) throw err;
        callback(result);
      });
    },
    // insertOne: 

    updateOne: function(tableInput, state, callback) {
      var queryString = `UPDATE ${tableInput} SET devoured = 1 WHERE ${state}`
      connection.query(query, function (err, result){
        if (err) throw err;
        callback(result);
      });
    }
  };


module.exports = orm;

// const orm = {
// selectAll: function(tableInput, cb){
//     var queryString = "SELECT * FROM ??";
//     connection.query(queryString, [tableInput],function(err, result) {
//         if (err) throw err;
//         cb(result);
//     });

// insertOne: function(tableInput, col, name, cb){
//     var queryString = "INSERT INTO ?? ?? VALUES ?";
//     connection.query(queryString, [tableInput, col, name],function(err, result) {
//         if (err) throw err;
//         cb(result);
// },

// updateOne: function(tableInput, col, name, id, cb){
//     var queryString = "UPDATE ?? SET ?? = ? WHERE ID = ?"
//     connection.query(queryString, [tableInput, col, name, id], function(err, result){
//         if (err) throw err;
//         cb(result);
//     })
// };

// SELECT * FROM burgers
// WHERE id = '$id'
// AND date = '$date'