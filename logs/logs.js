const fs = require('fs');
const util = require('util');
var currentdate = new Date();

var log_file = fs.WriteStream('debug.log');
var log_stdout = process.stdout;

var log = function(...d){
    var datetime = currentdate.getDate()
    + "/"
    + (currentdate.getMonth()+1)
    + "/"
    + currentdate.getFullYear()
    + "@"
    + currentdate.getHours()
    + ":"
    + currentdate.getMinutes()
    + ":"
    + currentdate.getSeconds()
    + " - ";

    log_file.write(datetime + util.format(...d) + '\n');
    log_stdout.write( datetime + util.format(...d) + '\n');
}

module.exports = log;