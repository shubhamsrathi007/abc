var express = require('express');
var app = express();



var humans=function (req, res) {
  console.log("CAlling rest api");
  var human=[
            {firstName:'Ravi',lastName:'Tambade',age:43,Department:'testing'},
            {firstName:'Prashant',lastName:'Karhale',age:43,Department:'testing'},
            {firstName:'Rohit',lastName:'Puranik',age:28,Department:'testing'},
            {firstName:'Shiv',lastName:'Kumar',age:25,Department:'testing'},
            {firstName:'Manoj',lastName:'Pande',age:23,Department:'testing'}
      ];
  res.send(human);
};



app.get('/human',humans );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})