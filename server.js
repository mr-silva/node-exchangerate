const http = require('http');
const rate = require('./index');

const port = 3000;
const ip = 'localhost';

const server = http.createServer((req, res) => {
  if(req.url == '/') {
    console.log('Solicitando acesso a home!');
    res.end();
  } 

  if(req.url == '/exchangerate') {
    console.log('Solicitando acesso a exchangerate!');
    res.end(rate);
  }
});

server.listen(port, ip, () => {
  console.log('Server is alive');
});