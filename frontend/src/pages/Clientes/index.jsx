import { ListaClientes } from '../../components';
import { useEffect, useState } from 'react';
import { Button, Container, FormControl, Pagination, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

//pag q lista os clientes
function Clientes() {

    const [carregado, setCarregado] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const [itens, setItens] = useState([]);
    const [numeroClientes, setnumeroClientes] = useState(0);
    const [numeroClientesTotal, setnumeroClientesTotal] = useState(0);
    const [mostrarPaginacao, setmostrarPaginacao] = useState(true);

    useEffect(() => {
        axiosInstance
            .get('/getNumberOfPages.php')
            .then((res) => {
                //console.log(res.data)
                const nClientes = res.data;
                setnumeroClientes(nClientes);
                setnumeroClientesTotal(nClientes);
                const nPages = Math.ceil( nClientes / 10);
                let aux = []
                for (let number = 1; number <= nPages; number++) {
                    aux.push(
                        <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
                            {number}
                        </Pagination.Item>,
                    );
                }
                setItens(aux);
            })
    }, [page]);

    useEffect(() => {
        axiosInstance
            .get('/getall.php/?page=' + page)
            .then((res) => {
                const data = res.data.body;
                setClientes(data);
                //console.table(data)
            })
            .catch((err) => alert("Erro ao carregar clientes " + err))
            .finally(setCarregado(true));
    }, [page]);

    function getAll() {
        axiosInstance
            .get('/getall.php/?page=' + page)
            .then((res) => {
                const data = res.data.body;
                setClientes(data);
                setnumeroClientes(numeroClientesTotal);
                setmostrarPaginacao(true);
                //console.table(data)
            })
            .catch((err) => alert("Erro ao carregar clientes " + err))
            .finally(setCarregado(true));
    }

    function search() {
        //console.log(filter)
        setCarregado(false);
        axiosInstance
            .get('/filter.php/?filter=' + filter)
            .then((res) => {
                const data = res.data.body;
                setClientes(data);
                setnumeroClientes(data.length);
                setmostrarPaginacao(false);
                //console.table(data)
            })
            .catch((err) => alert("Erro ao carregar clientes " + err))
            .finally(setCarregado(true));
    }

    return (
        <Container>
            <h3 className="titulo-pag">Lista de Clientes</h3>
            <header className="header">
                <FormControl
                    type="search"
                    placeholder="pesquisar por nome/email"
                    className="me-2"
                    aria-label="Search"
                    style={{width: '40%'}}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Button variant="outline-success" onClick={() => search()}>Buscar</Button>
                {!mostrarPaginacao && <Button variant="outline-warning" style={{marginLeft: '10px'}}onClick={() => getAll()}>Remover filtro</Button>}
                {/* Ir para formulario de criação de clientes */}
                <div className="div-botao-novo">
                    <Link to={'/adicionar'}>
                        <Button>Adicionar novo cliente</Button>
                    </Link>
                </div>
            </header>
            {carregado ?
                clientes ?
                    <div>
                        {mostrarPaginacao && <Pagination className='divMsg'>{itens}</Pagination>}
                        <div className='divMsg'><p>{numeroClientes} cliente(s) encontrados</p></div>
                        <ListaClientes clientes={clientes} nClientes={numeroClientes} />
                    </div>
                    : <div>Não foram achados clientes</div>
                : <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </Container>
    );
}

export default Clientes;