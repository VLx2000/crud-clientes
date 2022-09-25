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
### Rotas disponíveis
> No caminho `/api`

Requisição | Rota | Função
--------- | ------ | ------
get | `/getall.php` | obter todos os clientes
get | `/get.php/?id={id}` | obter determinado cliente
post | `/create.php` | criar novo cliente
put | `/update.php/?id={id}` | atualizar cliente
delete | `/delete.php/?id={id}` | deletar cliente
