export function ordenarFilmesPorPrice(filmes){

  const containerSelectByPrice = document.getElementById('orderByPrice');

    const optionPrice = document.getElementById('orderByPrice').value;
  
  const removerPrecosDuplicados = [...new Set(filmes.map(filme => filme.price))].sort((a, b) => b - a);
  
  removerPrecosDuplicados.map(price => {

  containerSelectByPrice.innerHTML += `<option id='optionPrice' value='${price}'>${price}</option>`;

  
  const selectValue = optionPrice;
  
  console.log(selectValue);

});

}





