import {filmes} from '/src/backend/data/filmes.js';
import {listarFilmes} from '/src/backend/gestaoDeFilmes/listarFilmes.js'
import {movieCard} from '/src/components/ui/movieCard.js'

export function alternarCategorias(){

  let containerDaGridDeFilmes = document.getElementById('movies-grid');

  const containerDasCategorias = document.getElementById('container-cat');
   
  const containerDasCategorias2 = document.querySelectorAll('.active2');

  containerDasCategorias.addEventListener('click', function(event){

  const currentTarget = event.target;
  
  const getValueOfCat = event.target.dataset.id;

  console.log(getValueOfCat, currentTarget);
    
  if(getValueOfCat ==='Todos'){

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });

        const catItems = document.getElementById('cat-all');

        catItems.classList.add('active2');

        containerDaGridDeFilmes.innerHTML ='';

        listarFilmes(filmes);

        }else if(getValueOfCat ==='Action'){

        const catItems = document.getElementById('cat-Action');

        catItems.classList.add('active2');

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });

        containerDaGridDeFilmes.innerHTML ='';

        const filtrandoCategoria = filmes.filter(filme => filme.categoria === 'Action').map(filme => {

        containerDaGridDeFilmes.innerHTML +=`

          ${movieCard(filme)}
          `;

          });
  
}else if(getValueOfCat ==='Horror'){

      const catItems = document.getElementById('cat-Horror');

        catItems.classList.add('active2');

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });
        
  containerDaGridDeFilmes.innerHTML ='';

 const filtrandoCategoria = filmes.filter(filme => filme.categoria === 'Horror' ).map(filme => {
    
  containerDaGridDeFilmes.innerHTML +=`

 ${movieCard(filme)}`;


});
}
else if(getValueOfCat ==='Comedy'){

      const catItems = document.getElementById('cat-Comedy');

        catItems.classList.add('active2');

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });

  containerDaGridDeFilmes.innerHTML ='';

  const filtrandoCategoria = filmes.filter(filme => filme.categoria === 'Comedy' ).map(filme => {
    
  containerDaGridDeFilmes.innerHTML +=`

 ${movieCard(filme)}`;
});


}else if(getValueOfCat ==='Drama'){

      const catItems = document.getElementById('cat-Drama');

      catItems.classList.add('active2');

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });

      containerDaGridDeFilmes.innerHTML ='';

      const filtrandoCategoria = filmes.filter(filme => filme.categoria === 'Drama' ).map(filme => {
    
      containerDaGridDeFilmes.innerHTML +=`

      ${movieCard(filme)}`;
});


}else if(getValueOfCat ==='Animation'){

    const catItems = document.getElementById('cat-Animation');

    catItems.classList.add('active2');

        containerDasCategorias2.forEach((element) => {

        element.classList.remove('active2');

        });

    containerDaGridDeFilmes.innerHTML ='';

    const filtrandoCategoria = filmes.filter(filme => filme.categoria === 'Animation' ).map(filme => {
    
    containerDaGridDeFilmes.innerHTML +=`

    ${movieCard(filme)}`;
});

}else{


}

});

}

//Por padrao mostra OS Filmes de todas as categorias 
//Se for igual a action fazer um filter a selecionar todos os filmes que a categoria corresponde
// limpar o container passar o spin e depois voltar a listar apenas os filmes que correspondem a categoria
/*

 Funcionalidade alternar categoria, recebe uma lista de filmes seleciona categprias de filmes
Adiciona um evento de click para ouvir onde sera clicado e depois pega o id com dataset
O dataset 

//Selecionar todos os elementos que tenham a classe active2
//remover a classe de todos os outros e adicionar apenas no elemento clicado! .this








*/
