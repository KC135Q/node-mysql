/**
 * Created by Admin on 9/11/2016.
 */
var db = require('./connection');

db.query('SELECT * FROM `people` WHERE `name` = "Sam"', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
    results.forEach(function(value) {
        console.log(value);
    });
});