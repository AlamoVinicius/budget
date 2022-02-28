# budget

## Seja bem vindo ao sistema budget.
 
 - Aplicação desenvolvida em React Para demonstração de Interface de usuários, e consumo de um banco de dados.
 - Para alterar o projeto e usar o JSON Server localmente altere **package.json**:
 
 ~~~
 "backend": "json-server --watch db.json --port 5000",
 ~~~
 
 altere todos os fecth para:
 ~~~
 fetch(http://localhost:5000)
 ~~~
 
 `npm run backend` Após isso podera integrar a aplicação com o JSON server e poderá editar os dados do banco de Dados no `db.json` através da aplicação localmente.
 
 - [teste da aplicação](https://budget-app.alamovinicius.repl.co). Como a aplicação neste link está integrada a um arquivo db.json no meu gitHub, O method: 'POST' sem realizar os passos
 anteriores você não irá poder criar novos projetos na aplicação, porém irá poder observar o state ao editar, excluir e inserir novos custos na aplicação. ao recarregar o projeto irá
 carregar os dados presentes db.json do meu repositório novamente. mas os processos de CRUD não devem ser desconsiderados pois estão presente no proojeto e serão melhor desenvolvido futuramente.
 
 projeto baseado no curso do yt, Hora de codar. 
