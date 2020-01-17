const express = require('express');

//Setup express app
const app = express();

//Liste for requests
app.listen(process.env.port || 4000, function(){
  console.log('test app listening');
});
