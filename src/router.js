//Criar uma sessao para verificar se o usuario esta logado
//Se estiver logado ao clicar em meus filmes exibir os filmes comprados pelo usuario
//Pegar o container do main
//limpar o container
//Se nao exbir formulario de login e senha ou uma tela  de bloqueio
import {filmes} from '/src/backend/data/filmes.js';
import {listarFilmes} from './backend/gestaoDeFilmes/listarFilmes.js'
import {alternarCategorias} from './backend/gestaoDeFilmes/alternarCategorias.js'
import {ordenarFilmesPorData} from './backend/gestaoDeFilmes/ordenarFilmesPorData.js'
import {ordenarFilmesPorPrice} from './backend/gestaoDeFilmes/ordenarFilmesByPrice.js'
import {pesquisarFilmes} from './backend/gestaoDeFilmes/pesquisarFilmes.js'
import {error} from '/src/components/ui/error.js'

export function router(){

let container = document.getElementById('hero-aside-items');

let main = document.getElementById('main');

  container.addEventListener('click', function(event){

const getRota = event.target.dataset.id;

console.log(getRota);

  if (getRota === 'home'){
  
      listarFilmes(filmes);
      alternarCategorias(filmes);
      ordenarFilmesPorData(filmes);
      ordenarFilmesPorPrice(filmes);
      pesquisarFilmes(filmes); 

    }else if(getRota === 'meus-filmes'){
    
      main.innerHTML ='';
      main.innerHTML =`${error()}`;
      
    }else if(getRota === 'favoritos'){
    
      main.innerHTML ='';
      main.innerHTML =`${error()}`;
      
    }else if(getRota === 'carrinho'){
    
      main.innerHTML ='';
      main.innerHTML =`${error()}`;
      
    }else if(getRota === 'perfil'){
    
      main.innerHTML ='';
      main.innerHTML =`${error()}`;
      
    }else if(getRota === 'sair'){
    
      main.innerHTML ='';
      main.innerHTML =`saindo...`;
      
    }
    
    else{

    }

});

}

//Verifica se o usuario existe esta logado e permite visualizar tudo daquele usuario



