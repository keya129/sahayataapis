var express = require('express')
 
var app = express()
 
app.get('/ping', function(req, res) {
  res.json({msg: "Hello World!"})
})
 
app.listen(3000)