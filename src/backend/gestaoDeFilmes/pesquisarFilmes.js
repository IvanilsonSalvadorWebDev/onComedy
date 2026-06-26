export function pesquisarFilmes(filmes){

//event para enetrada de dados
const containerInput = document.getElementById('seach');

const containerHero = document.getElementById('hero');

containerInput.addEventListener('input', function(event){

let searchTerm = containerInput.value;

console.log(searchTerm);

if(searchTerm){

containerHero.style.display='none';

}else if(searchTerm.length === 0){

containerHero.style.display='block';
containerHero.innerHTML = searchTerm;
}else{

}

});

}
