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

    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [observacao, setObservacao] = useState('');

    useEffect(() => {
        axiosInstance
            .get('/get.php/?id=' + params.idCliente)
            .then((res) => {
                const data = res.data;
                setCliente(data);
                setNome(data.nome);
                setNascimento(data.nascimento);
                setCpf(data.cpf);
                setCelular(data.celular);
                setEmail(data.email);
                setEndereco(data.endereco);
                setObservacao(data.observacao);
                //console.log('data')
                //console.log(params.idCliente)
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
            })
            .finally(setCarregado(true));
    }, [params.idCliente]);

    const submitHandler = async (e) => {
        e.preventDefault();

        axiosInstance
            .put('/update.php/?id=' + params.idCliente,
                JSON.stringify({ nome, nascimento, cpf, celular, email, endereco, observacao }),
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
            .delete('/delete.php/?id=' + params.idCliente)
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
                        <Form.Group controlId="nome" className="mb-3">
                            <Form.Label column sm="6">Nome</Form.Label>
                            <Form.Control
                                required
                                defaultValue={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="nasc" className="mb-3">
                            <Form.Label column sm="6">Data de nascimento</Form.Label>
                            <Form.Control
                                type='date'
                                required
                                defaultValue={nascimento}
                                onChange={(e) => setNascimento(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="cpf" className="mb-3">
                            <Form.Label column sm="6">CPF</Form.Label>
                            <Form.Control
                                required
                                defaultValue={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="celular" className="mb-3">
                            <Form.Label column sm="6">Celular</Form.Label>
                            <Form.Control
                                required
                                defaultValue={celular}
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label column sm="6">Email</Form.Label>
                            <Form.Control
                                required
                                defaultValue={email}
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="endereco" className="mb-3">
                            <Form.Label column sm="6">Endereço</Form.Label>
                            <Form.Control
                                required
                                defaultValue={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="obs" className="mb-3">
                            <Form.Label column sm="6">Observação</Form.Label>
                            <Form.Control
                                defaultValue={observacao}
                                type='textArea'
                                onChange={(e) => setObservacao(e.target.value)}
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