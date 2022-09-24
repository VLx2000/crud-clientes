import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';

// component q exibe a lista de clientes de determinado user
function ListaClientes({ clientes }) {

    return (
        <div className="lista row">
            {clientes.map(cliente => (
                <div key={cliente.id} className="col-sm-12 col-lg-6 col-xl-4 mb-3">
                    <Card className="card-cliente">
                        <div>
                            <h4>#{cliente.id}</h4>
                            <h6>Nome: {cliente.nome}</h6>
                            <div>Nascimento: {cliente.nascimento}</div>
                            <div>CPF: {cliente.cpf}</div>
                            <div>Celular: {cliente.celular}</div>
                            <div>Email: {cliente.email}</div>
                            <div>Endereco: {cliente.endereco}</div>
                            <div>Obs: {cliente.observacao}</div>
                        </div>
                        <div className="div-botoes-cliente">
                            <Link to={`/editar/${cliente.id}`}>
                                <Button variant="outline-secondary">Editar</Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            ))}
            <div className='divMsg'><p>{clientes.length} cliente(s)</p></div>
        </div>
    );
}

export default ListaClientes;