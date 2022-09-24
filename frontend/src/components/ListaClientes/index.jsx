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
                            <h6>Apelido: {cliente.apelido}</h6>
                            <div>Sexo: {cliente.sexo}</div>
                        </div>
                        <div className="div-botoes-cliente">
                            <Link to={`/editar/${cliente.id}`}>
                                <Button variant="outline-secondary">Editar</Button>
                            </Link>
                            <Link to={`/imagens/${cliente.id}`}>
                                <Button variant="outline-primary">Imagens</Button>
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