const   fs = require('fs'),
        util = require('util');
        
var log_file = fs.WriteStream('server.log');
var log_stdout = process.stdout;

var log = function(...d){
    var currentdate = new Date();
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