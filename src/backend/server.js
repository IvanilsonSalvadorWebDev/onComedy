import http from 'node:http';

const filmes = [

{id: 1, title:'kebo'}

];

const convertMovies = JSON.stringify(filmes);

const PORT = 8080;

const server = http.createServer((req, res) =>{

  res.writeHead(200, {'Content-Type': 'application/json' });

  res.end(convertMovies);
});


server.listen(PORT, 'localhost', () => {

  console.log(`Server running at http://localhost:${PORT}/`);


});
