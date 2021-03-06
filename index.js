//require express framework
const express = require('express');
//express function
const app = express();
//Deprecation of res.sendfile is invalid, "sendFile" is currently not working, so ignore the console log, as it's not true.d

// GET / file/index landing
app.get('/', (req, res) => {
  res.sendfile('index.html')
});
// GET/SEND file
app.get('/courses', (req, res) => {
  res.sendfile('courses/index.html')
}); 



app.use('/public', express.static(process.cwd() + '/public'));
app.use('/images', express.static(process.cwd() + '/images'));
app.use('/demo', express.static(process.cwd() + '/demo'));
// Handle 404
app.use(function(req, res) {
  res.sendfile('errors/404.htm', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
  res.sendfile('errors/500.htm', 500);
});
//listen on ports and give serverstart and serverready
app.listen(3000, () => {
  console.log('Server Ready');
  console.log('Server Start');
  console.log('Ignore deprecation messages below this one');
  
});
