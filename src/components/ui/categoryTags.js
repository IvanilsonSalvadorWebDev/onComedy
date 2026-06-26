export function categoryTags(filmes){

return `<div id='movie-list-section'>
                <div class='container-head'>
                    <h3>Filmes em destaque</h3>
                    <div id='container-cat' class='container-cat'>
                        <button data-id='Todos' class='cat-button active2'>Todos</button>
                        <button id='cat-Action' data-id='Action' class='cat-button'>Action</button>
                        <button id='cat-Horror' data-id='Horror' class='cat-button'>Horror</button>
                        <button id='cat-Comedy' data-id='Comedy' class='cat-button'>Comedy</button>
                        <button id='cat-Drama' data-id='Drama' class='cat-button'>Drama</button>
                        <button id='cat-Animation' data-id='Animation' class='cat-button'>Animation</button>
                    </div>
                </div>`
}

// crio a um objecto
//Faco uma desestruturacao do array 
