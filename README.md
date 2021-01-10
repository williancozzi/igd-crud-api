# igd-crud-api

## Etapa teste - Desafio da empresa Ignição Digital

### Projeto criado utilizando:
* __Node__ e __Express__; 
* __nodemon__ para ficar com o reload do watch, __Sucrase__ para usar import ao invés de require, __Yup__ para validar o body do post e put;
* __Sequelize__ no gerenciamento do banco de dados;
* __Docker__ na conteinerização;
* __PostgreSQL__ como banco;
* __React__ no front, com __Materialize__ para deixar mais bonito e o __axios__ para fazer as requisições.

Para rodar a aplicação, precisa ter o Docker e o Postgres na máquina.

Comece extraindo o zip, acesse a pasta backend e rode ```"npm install"```.
Em seguida, rode o comando ```"docker-compose up --b"``` que fará a build e levantará o serviço do Docker.
Se tudo ocorrer bem, aparecerá **__"API started on port 3000!"__** no seu terminal.

Agora, abra um novo terminal, acesse a pasta do client-manager, e dê o comando "npm install".
Na pasta do client-manager, digite ```"npm run start"``` ou ```"yarn start"```. O backend vai rodar na porta 3000, 
então quando ele perguntar se o front pode ser em outra porta, aperte ```"y"```.

Como o repo está privado, eu subi também o __dotenv__, mas será necessário adequá-lo ao seu postgres.