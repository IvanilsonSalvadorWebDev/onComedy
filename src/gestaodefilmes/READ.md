# Gestao de filmes 
## Tudo relacionado a gestao de filmes 

> listarFilmes();
- Receber o endepoint da lista de filmes que vem da api
- selecionar o container
- Limpar o container e mostrar spin animation de carregamento

- e Mapear o objecto no container
- Antes de apresentar primeiro chamo a funcao skelleton para apresentar o conteudo antes de listar
- Utilizo o debounce para apenas listar conteudo com base no que estiver a aparecer na viewport do usuario 


> verDetalhesDeFilmes();
- Receber o endepoint da lista de filmes que vem da api
- selecionar o container
- Limpar o container 
- Mapear o objecto no container
- Antes de apresentar primeiro chamo a funcao skelleton para apresentar o conteudo antes de listar
- Utilizo o debounce para apenas listar conteudo com base no que estiver a aparecer na viewport do usuario 


Player de filme 
-Exibir um filme em destaque do youtube ou api endpoint
- Deve iniciar automaticamente ao processar a page
- Deve permitir ao usuario controlar o player com botao de play e pause

## Fluxo 
Home carrega 
Funcao criar player e chamada
O video comeca sem som a reproduzir
e exibido os controles play e pause

ao clicar no play o video continua ate acabar e reinicia
ao clicar em pause o video para e exibe a imagem de capa do filme, enquanto a imagem aparece ouvesse o som de efeito sonoro de transicao suave

Como implementar isso
A ideia e me basear na documentacao da api do google para entender como o player funciona na realidade
Utilizar os metodos e funcoes para construir o player 
Utilizar alguma estrutura como oop para agrupar as funcionalidades 
