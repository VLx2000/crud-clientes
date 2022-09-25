import { ListaClientes } from '../../components';
import { useEffect, useState } from 'react';
import { Button, Container, FormControl, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

//pag q lista os clientes
function Clientes() {

    const [carregado, setCarregado] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getAll();
    }, []);

    function getAll() {
        axiosInstance
            .get('/getall.php')
            .then((res) => {
                const data = res.data.body;
                setClientes(data);
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
                    placeholder="filtrar clientes por nome ou email"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Button variant="outline-success" onClick={() => search()}>Buscar</Button>
                <Button variant="outline-warning" onClick={() => getAll()}>Remover filtro</Button>
                {/* Ir para formulario de criação de clientes */}
                <div className="div-botao-novo">
                    <Link to={'/adicionar'}>
                        <Button>Adicionar novo cliente</Button>
                    </Link>
                </div>
            </header>
            {carregado ?
                clientes ? <ListaClientes clientes={clientes} /> : <div>Não foram achados clientes</div>
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