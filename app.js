var request = require('request');
var fs = require('fs');

var url = 'https://pdftables.com/api?key=YOUR_API_KEY&format=xlsx-single';
var req = request.post({encoding: null, url: url}, function (err, resp, body) {
 if (!err && resp.statusCode == 200) {
   fs.writeFile("output.xlsx", body, function(err) {
     if (err) {
       console.log('error writing file');
     }
   });
 } else {
   console.log('error retrieving URL');
 };
});

var form = req.form();
form.append('file', fs.createReadStream('example.pdf'));
