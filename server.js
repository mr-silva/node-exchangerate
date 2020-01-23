require('./node_modules/dotenv/config');
const http = require('http');
const rate = require('./index');

const ip = process.env.SERVER_IP;
const port = process.env.SERVER_PORT;

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