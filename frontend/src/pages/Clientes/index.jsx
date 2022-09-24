import { ListaClientes } from '../../components';
import { useEffect, useState } from 'react';
import { Button, Container, FormControl, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

//pag q lista os clientes
function Clientes() {

    const [carregado, setCarregado] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axiosInstance
            .get('/cliente/list')
            .then((res) => {
                const data = res.data;
                setClientes(data);
                //console.table(data)
                setCarregado(true);
            })
            .catch((err) => alert("Erro ao carregar clientes" + err));
    }, []);

    return (
        <Container>
            <h3 className="titulo-pag">Lista de Clientes</h3>
            <header className="header">
                <FormControl
                    type="search"
                    placeholder="filtrar clientes por id"
                    className="me-2"
                    aria-label="Search"
                /* onChange={handleFilter} */
                />
                {/* Ir para formulario de criação de clientes */}
                <div className="div-botao-novo">
                    <Link to={'/adicionar'}>
                        <Button>Adicionar novo cliente</Button>
                    </Link>
                </div>
            </header>
            {carregado ?
                <ListaClientes clientes={clientes} />
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