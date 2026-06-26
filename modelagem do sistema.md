#  Tecnologias
- vite
- node js
- banco de dados mysql
- hospegagem
- API - tmdb for get movies, search movies, categorias de filmes 

## Modulos 

- Gestao de Cart, addAoCart, reduzir, aumentarQtd, reduzirQtd, checkout
- Gestao de usuarios profile, register, auth, login etc 
- Gestao de filmes, listagem, pesquisa, ordenacao,  
- Gestao de 

1 - Fluxo - user acess url -> Sistem get ip adress
2 - Fluxo - navega no catalogo -> Sistema exibe lista de filmes
3 - Fluxo - clica no botao addToCard -> Sistema adiciona o produto a uma lista maximo 3 filmes por dia compra ou aluguel 
4 - Fluxo - clica no botao continuar a comprar -> sistema verifica se o usuario esta logado 

Desvio -> se estiver logado 
- Sistema chama checkout service

Desvio -> se nao estiver logado 
- Redireciona para o login 

5 - Fluxo - preenche dados de pagamento -> 
6 - Fluxo - clica em finalizar Pedido -> sistema verifica as informacoes de pagamento no perfil

Desvio -> se tiver uma forma pagamento
- Sistema valida o metodo de pagamento
- Sistema finaliza o pedido
- Limpa o carrinho e exibe uma pagina de sucesso
- retorna ao home page

Desvio -> se nao tiver forma de pagamento
- Redireciona para o perfil page
- Usuario preenche o formulario
- Sistema valida os dados
- Salva no banco de dados 
- Retorna para o checkout
- Sistema finaliza o pedido
- Limpa o carrinho e exibe uma pagina de sucesso
- retorna ao home page


Primeiro modulo gestao de filmes()

listagem de filmes()
ordenacao de filmes()
filtragem de filmes()
listagem de categorias()


enquanto o user estiver logado
- vais mostrar os meus filmes
- botao de logout
- nome de usuario logado
- mostrar produtos no carrinho nao finalizados


