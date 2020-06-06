// Passing orm to handler file when then needs to be required in controller
var orm = require("../orm")

var burgerModel = {
selectAll: function(tableInput,cb) {
    orm.selectAll("burgers", function(result){
        cb(result);
    });

},
insertOne:{},
updateOne:{}
}