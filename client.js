var connect = require('net');
var client = connect.connect('5432', 'localhost');
client.on('data', function(data) {
console.log(''+data);
});
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    client.write('' + chunk);
  }
});
