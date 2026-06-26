export function mappingMoviesByPrice(filmes){

 const containerSelectByPrice = document.getElementById('orderByPrice');
  
  const optionPrice = document.getElementById('orderByPrice');

  removerPrecosDuplicados.forEach(price => {

  containerSelectByPrice.innerHTML += `<option id='optionPrice' data-id='${price}'>${price}</option>`;

  optionPrice.addEventListener('change', function(event){

  const priceId = event.target.dataset.id;

  console.log(priceId);

});
}
