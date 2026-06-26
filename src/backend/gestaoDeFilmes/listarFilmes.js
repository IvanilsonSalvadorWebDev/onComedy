import {filmes} from '/src/backend/data/filmes.js';

import {movieCard} from '/src/components/ui/movieCard.js'

import {error} from '/src/components/ui/error.js'

export function listarFilmes(filmes){

const container = document.getElementById('movies-grid');

console.log(filmes);

async function fetchUser(){

 const url = '/src/backend/data/users.json';
 
  const getUsers = await fetch(url);
  
  const data = await getUsers.json();
  
  return data;
}

fetchUser().then((dadosRecebidos) => {
  
  const users = dadosRecebidos;

  const [user] = users;

    if (user.active === true){

      filmes.map(filme => {

      container.innerHTML += `${movieCard(filme)}`;

      });
    
    }else{container.innerHTML += `${error()}`;
;}

  });


fetchUser();
}




