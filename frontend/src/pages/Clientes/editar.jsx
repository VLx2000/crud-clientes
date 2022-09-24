import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { Voltar } from "../../components";

// component q exibe form para editar cliente
function EditarCliente() {

    const params = useParams();
    const navigate = useNavigate();

    const [erro, setErro] = useState('');
    const [carregado, setCarregado] = useState(false);
    const [cliente, setCliente] = useState();

    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [nascimento, setNascimento] = useState();

    useEffect(() => {
        axiosInstance
            .get('/cliente/' + params.idCliente)
            .then((res) => {
                const data = res.data;
                setCliente(data);
                setApelido(data?.apelido);
                setSexo(data?.sexo);
                setNascimento(data?.nascimento);
                //console.table(data)
                setCarregado(true);
            })
            .catch((error) => {
                const code = error?.response?.status;
                console.log(code)
                switch (code) {
                    case 404:
                        setErro("Cliente não encontrado");
                        break;
                    default:
                        setErro("Ops. Algo deu errado");
                        break;
                }
            });
    }, [cliente?.apelido, cliente?.nascimento, cliente?.sexo, params.idCliente]);

    const submitHandler = async (e) => {
        e.preventDefault();

        axiosInstance
            .put('/cliente/' + params.idCliente,
                JSON.stringify({ apelido, sexo, nascimento }),
                { headers: { "Content-Type": 'application/json', } }
            )
            .then((res) => {
                navigate('/');
            })
            .catch((error) => {
                console.log('epa')
            });
    };

    const deletar = async () => {
        axiosInstance
            .delete('/cliente/' + params.idCliente)
            .then((res) => {
                navigate('/');
            })
            .catch((error) => {
                console.log('epa')
            });
    };

    return (
        <Container>
            <Voltar caminho={`/`} />
            {erro && <Alert variant="danger">{erro}</Alert>}
            {carregado ?
                <Container className="login-container">
                    <Form onSubmit={submitHandler}>
                        <h3 className="titulo-pag">Editar cliente {cliente?.id}</h3>
                        <Form.Group controlId="apelido" className="mb-3">
                            <Form.Label column sm="6">Apelido</Form.Label>
                            <Form.Control
                                defaultValue={apelido}
                                onChange={(e) => setApelido(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="sexo" className="mb-3">
                            <Form.Label column sm="6">Sexo</Form.Label>
                            <Form.Select
                                defaultValue={sexo}
                                required
                                onChange={(e) => setSexo(e.target.value)}>
                                <option>Não declarado</option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="data" className="mb-3">
                            <Form.Label column sm="6">Data de nascimento</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                defaultValue={nascimento?.toString().slice(0, 10)}
                                onChange={(e) => setNascimento(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="criar" className="mb-3 div-botao-entrar">
                            <Button variant="secondary" type="submit">Salvar</Button>
                            <Button variant="outline-danger" onClick={deletar}>Apagar cliente</Button>
                        </Form.Group>
                    </Form>
                </Container>
                : <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </Container>
    );
}

export default EditarCliente;