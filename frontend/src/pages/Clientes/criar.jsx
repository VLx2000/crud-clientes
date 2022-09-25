import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { Voltar } from "../../components";
import { verificaCPF, verificaNome, verificaObservacao } from "../../utils/verificacoes";

// component q exibe form para criar novo cliente
function NovoCliente() {

    //const navigate = useNavigate();

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

    const submitHandler = async (e) => {
        e.preventDefault();

        axiosInstance
            .post('/create.php',
                JSON.stringify({ nome, nascimento, cpf, celular, email, endereco, observacao }),
                //{ headers: { "Content-Type": 'application/json', } }
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
            <Voltar caminho={'/'} />
            <Container className="login-container">
                <Form onSubmit={submitHandler}>
                    {msg && <Alert variant="warning">{msg}</Alert>}
                    <h3 className="titulo-pag">Adicionar novo cliente</h3>
                    <Form.Group controlId="nome" className="mb-3">
                        <Form.Label column sm="6">Nome</Form.Label>
                        <Form.Control
                            required
                            isInvalid={erroNome}
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
                            onChange={(e) => setNascimento(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="cpf" className="mb-3">
                        <Form.Label column sm="6">CPF</Form.Label>
                        <Form.Control
                            required
                            isInvalid={erroCpf}
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
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label column sm="6">Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="endereco" className="mb-3">
                        <Form.Label column sm="6">Endereço</Form.Label>
                        <Form.Control
                            required
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="obs" className="mb-3">
                        <Form.Label column sm="6">Observação</Form.Label>
                        <Form.Control
                            isInvalid={erroObs}
                            as="textarea" rows={3}
                            onChange={(e) => handleObs(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            O limite é de 300 caracteres
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="criar" className="mb-3 div-botao-entrar">
                        <Button type="submit" disabled={erroCpf || erroNome || erroObs}>Criar cliente</Button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    );
}

export default NovoCliente;