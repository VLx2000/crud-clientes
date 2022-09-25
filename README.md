# CRUD de clientes

API REST e frontend para CRUD de clientes. Utiliza React e PHP.

### Tecnologias usadas
#### (Front - React)
- Bootstrap
- Font awesome
- Axios
#### (Back - PHP)
- PDO
#### (BD)
 - MySQL
#### (Outros)
 - Docker Compose
 
### Para executar
Com o docker e docker compose instalados na máquina execute:
```
docker-compose build && docker-compose up
``` 
Depois acesse a rota [3000](http://localhost:3000)
> Obs1: Dependendo do sistema, pode ser necessário executar como sudo

> Obs2: Na primeira vez, os containers demoram bastante para subirem

> Obs3: O banco de dados MySQL será criado e povoado com exemplos automaticamente

### Rotas disponíveis
> No caminho `/api`

Requisição | Rota | Função
--------- | ------ | ------
get | `/getall.php/?page={numero}` | obter todos os clientes sendo separados por pag de 10 elementos
get | `/get.php/?id={id}` | obter determinado cliente
get | `/filter.php/?filter={filtro}` | pesquisar por clientes com determinado filtro (nome ou email)
post | `/create.php` | criar novo cliente
put | `/update.php/?id={id}` | atualizar cliente
delete | `/delete.php/?id={id}` | deletar cliente
