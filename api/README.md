# 🚀 Front end challenge

Bem-vindo(a). Este é o desafio Front end!

O objetivo deste desafio é avaliar suas habilidades de programação.
Quando sua solução estiver pronta, basta responder o e-mail que recebeu com o link do seu repo aqui no Github!
Em seguida, após avaliarmos enviaremos o feedback e as instruções!

O prazo máximo de entrega é até dia 26/04 23:59

Bom desafio!

> ⚠️ **É importante que o seu repo esteja público, caso contrário não iremos conseguir avaliar sua resposta**

# 🧠 Contexto

O desafio será implementar um e-commerce para venda de canecas e camisetas que deverá ter as seguintes funcionalidades:

- [ ] Catálogo de produtos com paginação
- [ ] Filtragem produtos por categoria
- [ ] Busca por nome do produto
- [ ] Adicionar e remover produtos do carrinho
- [ ] Finalizar compra

## 📋 Instruções

Chegou a hora de colocar a mão na massa!

- [ ] Siga [esse protótipo](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449)
- [ ] Utilize Next.js e Typescript
- [ ] Faça a estilização com tailwind
- [ ] Utilize o local storage para gerenciar o carrinho
- [ ] Por favor, inclua no README as instruções de instalação do projeto
- [ ] Sinta-se livre para incluir quaisquer observações
- [ ] Consuma nossa api rodando o comando `npm run start` na pasta `api`

## ✔️ Critérios de Avaliação

Além dos requisitos levantados acima, iremos olhar para os seguintes critérios durante a correção do desafio:

- [ ] Gerenciamento de estado
- [ ] Componentização
- [ ] Responsividade
- [ ] Preocupação com usabilidade
- [ ] Preocupação com acessibilidade
- [ ] Padrões de código
- [ ] Padrão de commits

## Endpoints

GET /items
GET(PAGINATED) /items?\_page=&\_limit=
GET(SEARCH) /items?name_like=
GET /items/:id
DELETE /items/:id
