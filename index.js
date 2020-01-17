const express = require('express');
const routes = require('./routes/api');

//Setup express app
const app = express();

//JSON data
app.use(express.json());

//Initialize routes
app.use('/api',routes);

//Liste for requests
app.listen(process.env.port || 4000, function(){
  console.log('test app listening');
});
