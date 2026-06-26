import './style.css'

import {Header} from './components/layout/Header.js'
import {Filters} from './components/ui/Filters.js'
import {categoryList} from './components/ui/categoryList.js'
import {searchContainer} from './components/ui/searchContainer.js'
import {Aside} from './components/layout/Aside.js'
import {Hero} from './components/ui/Hero.js'
import {categoryTags} from './components/ui/categoryTags.js'
import {movieCard} from './components/ui/movieCard.js'
import {filmes} from '/src/backend/data/filmes.js';

import {listarFilmes} from './backend/gestaoDeFilmes/listarFilmes.js'
import {alternarCategorias} from './backend/gestaoDeFilmes/alternarCategorias.js'
import {ordenarFilmesPorData} from './backend/gestaoDeFilmes/ordenarFilmesPorData.js'
import {ordenarFilmesPorPrice} from './backend/gestaoDeFilmes/ordenarFilmesByPrice.js'
import {pesquisarFilmes} from './backend/gestaoDeFilmes/pesquisarFilmes.js'
import {filtrarFilmesPorMaior} from './backend/gestaoDeFilmes/filtrarFilmesPorMaior.js'

import './backend/gestaoDeFilmes/utils.js'

import {router} from './router.js'

document.querySelector('#app').innerHTML = `
  ${Header()}

<div class='container'>

  ${Filters()}
  ${categoryList(filmes)}
  ${searchContainer()}

  <div id='container-geral'>
  
  ${Aside()}

    <main id='main'>

      ${Hero()}

      <section id='container2'>

      ${categoryTags(filmes)}

        <div id='movies-grid'>
       
        </div>
      
      </section>

    </main>

  </div>

</div>
`

listarFilmes(filmes);
alternarCategorias(filmes);
ordenarFilmesPorData(filmes);
ordenarFilmesPorPrice(filmes);
pesquisarFilmes(filmes);
filtrarFilmesPorMaior(filmes);
router();



