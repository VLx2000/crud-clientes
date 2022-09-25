import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { Voltar } from "../../components";
import { verificaCPF, verificaNome, verificaObservacao } from "../../utils/verificacoes";

// component q exibe form para editar cliente
function EditarCliente() {

    const params = useParams();
    //const navigate = useNavigate();

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

    const [erroNome, setErroNome] = useState(false);
    const [erroCpf, setErroCpf] = useState(false);
    const [erroObs, setErroObs] = useState(false);

    const [msg, setMsg] = useState('');

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
                //navigate('/');
                console.log(res.data.message)
                setMsg(res.data.message);
            })
            .catch((error) => {
                setMsg(error.data.message);
            });
    };

    const deletar = async () => {
        axiosInstance
            .delete('/delete.php/?id=' + params.idCliente)
            .then((res) => {
                //navigate('/');
                console.log(res.data.message)
                setMsg(res.data.message);
            })
            .catch((error) => {
                setMsg(error.data.message);
            });
    };

    function handleNome(nome) {
        setErroNome(verificaNome(nome));
        setNome(nome);
    }

    function handleCPF(cpf) {
        setErroCpf(verificaCPF(cpf));
        setCpf(cpf);
    }

    function handleObs(obs) {
        setErroObs(verificaObservacao(obs));
        setObservacao(obs);
    }

    return (
        <Container>
            <Voltar caminho={`/`} />
            {erro && <Alert variant="danger">{erro}</Alert>}
            {carregado ?
                <Container className="login-container">
                    <Form onSubmit={submitHandler}>
                        {msg && <Alert variant="warning">{msg}</Alert>}
                        <h3 className="titulo-pag">Editar cliente {cliente?.id}</h3>
                        <Form.Group controlId="nome" className="mb-3">
                            <Form.Label column sm="6">Nome</Form.Label>
                            <Form.Control
                                isInvalid={erroNome}
                                required
                                defaultValue={nome}
                                onChange={(e) => handleNome(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Nome não aceita símbolos
                            </Form.Control.Feedback>
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
                                isInvalid={erroCpf}
                                defaultValue={cpf}
                                onChange={(e) => handleCPF(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                CPF inválido
                            </Form.Control.Feedback>
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
                                isInvalid={erroObs}
                                as="textarea" rows={3}
                                onChange={(e) => handleObs(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                O limite é de 300 caracteres
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="criar" className="mb-3 div-botoes-acao">
                            <Button variant="secondary" disabled={erroCpf || erroNome || erroObs} type="submit">Salvar</Button>
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