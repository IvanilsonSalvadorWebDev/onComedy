export function ordenarFilmesPorData(filmes){

  const containerSelectByData = document.getElementById('orderByData');

  const removerFilmesDuplicados = [...new Set(filmes.map(filme => filme.anoLanc))].sort((a, b) => b - a);
  
    console.log(removerFilmesDuplicados);

  removerFilmesDuplicados.forEach(filme => {

  containerSelectByData.innerHTML += `<option data-id='${filme}'>${filme}</option>`;

});
  
/*
  console.log(filterMoviesByData);

  containerSelectByData.addEventListener('change', function(event){

  const getValueOfDataSelect = event.dataset.id;

  console.log(getValueOfDataSelect);

});
*/
}
