export function filtrarFilmesPorMaior(filmes){

  const containerSelectBy = document.getElementById('selectOrderBy');

  const selectOrderBy = document.getElementById('selectOrderBy').value;
      
  const removerFilmesDuplicados = [...new Set(filmes.sort((a, b) => b - a))];

  console.log(selectOrderBy);

}

