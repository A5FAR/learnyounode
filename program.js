// problem 1
//console.log("HELLO WORLD");

//problem 2
/*
var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
	sum += +process.argv[i];
}
console.log(sum);
//console.log(process.argv);
*/


//problem 3
/*
var fs = require('fs');
var read = fs.readFileSync(process.argv[2]);
var str = read.toString();
var lines = str.split('\n').length-1;
console.log(lines)
//console.log(str);
*/


//problem 4
/*
var fs = require('fs');
//var read = fs.readFile(process.argv[2]);
fs.readFile(process.argv[2], function (err, read){
	var str = read.toString();
	var lines = str.split('\n').length-1;
	console.log(lines);
})
//console.log(lines); //apparantly it doesn't work outside
*/


//problem 5
/*
var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list){
	list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file)
        }
    })
})
*/


//problem 6
/*
var filterFn = require('./solution.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
 
filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }
 
    list.forEach(function (file) {
        console.log(file)
    });
});
 */


 //problem 7
/*
var http = require('http');
 
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});
*/


//problem 8
/*
var http = require('http');
var bl = require('bl');
 
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
 
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
*/

//problem 9
/*
var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;
 
function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
 
}
 
function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
 
            results[index] = data.toString();
            count++;
 
            if (count == 3) {
                printResults();
            }
 
        }));
    });
}
 
for (var i = 0; i < 3; i++) {
    httpGet(i);
}
*/

//problem 10
/*
var net = require('net');
 
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}
 
function now() {
    var d = new Date();
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes());
}
 
var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
});
 
server.listen(Number(process.argv[2]));
*/

//problem 11
/*
var http = require('http');
var fs = require('fs');
 
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
 
    fs.createReadStream(process.argv[3]).pipe(res)
});
 
server.listen(Number(process.argv[2]));
*/

//problem 12

 var map = require('through2-map')
     inStream.pipe(map(function (chunk) {
       return chunk.toString().split('').reverse().join('')
     })).pipe(outStream)