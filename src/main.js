import './style.css'

import {Header} from './components/layout/Header.js'
import {Filters} from './components/ui/Filters.js'
import {categoryList} from './components/ui/categoryList.js'
import {searchContainer} from './components/ui/searchContainer.js'
import {Aside} from './components/layout/Aside.js'
import {Hero} from './components/ui/Hero.js'
import {categoryTags} from './components/ui/categoryTags.js'
import {movieCard} from './components/ui/movieCard.js'

document.querySelector('#app').innerHTML = `
  ${Header()}

<div class='container'>

  ${Filters()}
  ${categoryList()}
  ${searchContainer()}

  <div id='container-geral'>
  
  ${Aside()}

    <main>

      ${Hero()}

      <section id='container2'>

      ${categoryTags()}

        <div id='movies-grid'>
              ${movieCard()}

        </div>
      
      </section>

    </main>

  
  </div>

  


</div>
  
`
