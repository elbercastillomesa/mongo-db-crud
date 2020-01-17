const express = require('express');

//Setup express app
const app = express();

app.get('/api', function(req, res){
  console.log('GET request');
  res.send({test:'message'});
})

//Liste for requests
app.listen(process.env.port || 4000, function(){
  console.log('test app listening');
});
